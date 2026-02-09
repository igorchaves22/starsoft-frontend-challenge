import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cart";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export const actions = cartSlice.actions;

type Store = typeof store;
export type StoreRootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
