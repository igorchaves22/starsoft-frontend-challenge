"use client";

import { useCallback, useEffect } from "react";
import { useCart, useDoubleTransitionState } from "~hooks";

export const useController = () => {
    const { selector, handleClearCart } = useCart();
    const { state: confirm, toggleState: toggleConfirm } = useDoubleTransitionState();

    const handleClickConfirm = useCallback(() => toggleConfirm(true, 1500), [toggleConfirm]);

    useEffect(() => {
        if (confirm.delayed) handleClearCart();
    }, [confirm.delayed, handleClearCart]);

    return {
        selector,
        confirm,
        handleClickConfirm
    };
};
