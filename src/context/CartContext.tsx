import { createContext, useState, ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import { Product } from "../types/types";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    totalQuantity: number;
    totalPrice: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                toast.info(`${product.title} quantity increased!`, { position: "top-right" });
                return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            }
            toast.success(`${product.title} added to cart!`, { position: "top-right" });
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        toast.warn("Product removed from cart", { position: "top-right" });
    };

    const clearCart = () => {
        setCart([]);
        toast.error("Cart cleared", { position: "top-right" });
    };

    const decreaseQuantity = (id: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
            }
            return prevCart.filter((item) => item.id !== id);
        });
        toast.info("Quantity decreased", { position: "top-right" });
    };

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart, totalQuantity, totalPrice }}>{children}</CartContext.Provider>;
};
