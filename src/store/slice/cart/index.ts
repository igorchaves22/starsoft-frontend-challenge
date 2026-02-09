import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "~types";
import { calculateCartTotal, CART_CONFIG, saveCartToLocalStorage } from "~utils";

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_CONFIG.initialState,
    reducers: {
        hydrateCart: (_, action: PayloadAction<Cart>) => action.payload,
        addProductToCart: (state, action: PayloadAction<Product>) => {
            const { payload } = action;
            const productInCart = state.products.find(({ id }) => id === payload.id);

            if (productInCart) {
                productInCart.quantity += 1;
            } else {
                state.products.push({ ...payload, quantity: 1 });
            }

            state.totalProducts = calculateCartTotal(state.products, "quantity");
            state.totalPrice = calculateCartTotal(state.products, "price");
            saveCartToLocalStorage(state);
        },
        removeProductFromCart: (state, action: PayloadAction<number>) => {
            const { payload } = action;
            const productInCart = state.products.find(({ id }) => id === payload);

            if (productInCart) {
                if (productInCart.quantity > 1) {
                    productInCart.quantity -= 1;
                } else {
                    state.products = state.products.filter(({ id }) => id !== payload);
                }
            }

            state.totalProducts = calculateCartTotal(state.products, "quantity");
            state.totalPrice = calculateCartTotal(state.products, "price");
            saveCartToLocalStorage(state);
        },
        removeProductFromCartCompletely: (state, action: PayloadAction<number>) => {
            const { payload } = action;

            state.products = state.products.filter(({ id }) => id !== payload);
            state.totalProducts = calculateCartTotal(state.products, "quantity");
            state.totalPrice = calculateCartTotal(state.products, "price");
            saveCartToLocalStorage(state);
        },
        clearCart: (state) => {
            state.products = CART_CONFIG.initialState.products;
            state.totalProducts = CART_CONFIG.initialState.totalProducts;
            state.totalPrice = CART_CONFIG.initialState.totalPrice;
            saveCartToLocalStorage(state);
        }
    }
});
