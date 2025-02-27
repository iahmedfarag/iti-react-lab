import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Category } from "../types/types";

interface ProductsState {
    products: Product[];
    categories: Category[];
    selectedCategory: string;
}

const initialState: ProductsState = {
    products: [],
    categories: [],
    selectedCategory: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setProducts, setCategories, setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;
