"use client";

import { useCallback, useState } from "react";
import { useTimeout } from "./useTimeout";

const INITIAL_STATE = false;
const DEFAULT_DELAY = 400;

export const useDoubleTransitionState = (initialState?: boolean) => {
    const [state, setState] = useState({
        immediate: initialState ?? INITIAL_STATE,
        delayed: initialState ?? INITIAL_STATE
    });
    const { start: startRenderTimeout } = useTimeout();

    const toggleState = useCallback(
        (value?: boolean, delay?: number) =>
            setState((previousState) => {
                const currentState = previousState.immediate;
                const nextState = value ?? !currentState;

                if (currentState === nextState) return previousState;

                const timeoutDelay = delay ?? DEFAULT_DELAY;

                startRenderTimeout(() => {
                    setState((previousInnerState) => ({
                        ...previousInnerState,
                        delayed: nextState
                    }));
                }, timeoutDelay);

                return {
                    ...previousState,
                    immediate: nextState
                };
            }),
        [startRenderTimeout]
    );

    return { state, toggleState };
};
