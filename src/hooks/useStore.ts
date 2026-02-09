"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, AppDispatch, StoreRootState } from "~store";
import { Cart, Product } from "~types";

export const useCart = () => {
    const selector = useSelector(({ cart }: StoreRootState) => cart);
    const dispatch = useDispatch<AppDispatch>();

    const handleHydrateCart = useCallback((cart: Cart) => dispatch(actions.hydrateCart(cart)), [dispatch]);
    const handleClickAddProductToCart = useCallback(
        (product: Product) => dispatch(actions.addProductToCart(product)),
        [dispatch]
    );
    const handleClickRemoveProductFromCart = useCallback(
        (id: number) => dispatch(actions.removeProductFromCart(id)),
        [dispatch]
    );
    const handleClickRemoveProductFromCartCompletely = useCallback(
        (id: number) => dispatch(actions.removeProductFromCartCompletely(id)),
        [dispatch]
    );
    const handleClearCart = useCallback(() => dispatch(actions.clearCart()), [dispatch]);

    return {
        selector,
        handleHydrateCart,
        handleClickAddProductToCart,
        handleClickRemoveProductFromCart,
        handleClickRemoveProductFromCartCompletely,
        handleClearCart
    };
};
