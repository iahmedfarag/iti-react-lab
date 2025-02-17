import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../types/types";
import { toast } from "react-toastify";

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingItem = state.cart.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
                toast.info(`${product.title} Quantity increased`, { position: "top-right" });
            } else {
                state.cart.push({ ...product, quantity: 1 });
                toast.success(`${product.title} added to cart!`, { position: "top-right" });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const removedItem = state.cart.find((item) => item.id === action.payload);
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            if (removedItem) {
                toast.warn(`${removedItem.title} removed from cart`, { position: "top-right" });
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    toast.info(`${item.title} Quantity decreased`, { position: "top-right" });
                } else {
                    state.cart = state.cart.filter((item) => item.id !== action.payload);
                    toast.warn(`${item.title} removed from cart`, { position: "top-right" });
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
            toast.error("Cart cleared", { position: "top-right" });
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
