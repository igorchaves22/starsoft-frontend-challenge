"use client";

import { useEffect, useState } from "react";
import { useTimeout } from "./useTimeout";

export const useLoader = (delay?: number) => {
    const [isLoading, setLoader] = useState(true);
    const { start: startTimeout } = useTimeout();

    useEffect(() => {
        startTimeout(() => setLoader(false), delay);

        return () => setLoader(true);
    }, [delay, startTimeout]);

    return { isLoading };
};
