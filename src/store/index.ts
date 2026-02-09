import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = {}) => state;

export const store = configureStore({
    reducer: {
        _root: rootReducer
    }
});

type Store = typeof store;
export type StoreRootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
