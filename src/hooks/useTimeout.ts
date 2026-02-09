"use client";

import { useCallback, useEffect, useRef } from "react";

type TimeoutRef = ReturnType<typeof setTimeout> | null;
type VoidFunction = () => void;

const DEFAULT_TIMEOUT_DELAY = 400;

export const useTimeout = () => {
    const timeoutRef = useRef<TimeoutRef>(null);
    const callbackRef = useRef<VoidFunction>(() => {});

    const clearTimeoutRef = useCallback(() => {
        if (!timeoutRef.current) return;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
    }, []);
    const start = useCallback(
        (callback: () => void, delay?: number) => {
            callbackRef.current = callback;
            clearTimeoutRef();
            const delayValue = delay ?? DEFAULT_TIMEOUT_DELAY;
            timeoutRef.current = setTimeout(() => callbackRef.current(), delayValue);
        },
        [clearTimeoutRef]
    );

    useEffect(() => clearTimeoutRef, [clearTimeoutRef]);

    return { start };
};
