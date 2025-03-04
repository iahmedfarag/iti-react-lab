// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";
import productsSlice from "../slices/productsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        products: productsSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
