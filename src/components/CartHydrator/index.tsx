"use client";

import { useEffect } from "react";
import { useCart } from "~hooks";
import { CART_CONFIG, getCartFromLocalStorage, saveCartToLocalStorage } from "~utils";

export const CartHydrator = () => {
    const { handleHydrateCart } = useCart();

    useEffect(() => {
        const storedCart = getCartFromLocalStorage();

        if (!storedCart) return saveCartToLocalStorage(CART_CONFIG.initialState);

        handleHydrateCart(storedCart);
    }, [handleHydrateCart]);

    return null;
};
