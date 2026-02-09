"use client";

import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useState } from "react";
import { Children } from "~types";
import { ViewportContext } from "./context";

export const ViewportContextProvider = ({ children }: Children) => {
    const [viewportSize, setViewportSize] = useState({
        width: 0,
        height: 0
    });
    const [scrollOffsetY, setScrollOffsetY] = useState(0);

    const handleDimensions = useCallback(
        () =>
            setViewportSize(() => ({
                width: window.innerWidth,
                height: window.innerHeight
            })),
        []
    );
    const handleScrollOffsetY = useCallback(() => setScrollOffsetY(window.scrollY), []);
    const checkThreshold = useCallback(
        (type: "width" | "scroll", threshold: number, isBelow?: boolean) => {
            const value = type === "width" ? viewportSize.width : scrollOffsetY;

            if (isBelow) return value < threshold;

            return value >= threshold;
        },
        [scrollOffsetY, viewportSize.width]
    );
    const syncWindowState = useEffectEvent(() => {
        setViewportSize({ width: window.innerWidth, height: window.innerHeight });
        setScrollOffsetY(window.scrollY);
    });

    useLayoutEffect(() => syncWindowState(), []);
    useEffect(() => {
        window.addEventListener("resize", handleDimensions);
        window.addEventListener("scroll", handleScrollOffsetY);

        return () => {
            window.removeEventListener("resize", handleDimensions);
            window.removeEventListener("scroll", handleScrollOffsetY);
        };
    }, [handleDimensions, handleScrollOffsetY]);

    return (
        <ViewportContext.Provider value={{ viewportSize, scrollOffsetY, checkThreshold }}>
            {children}
        </ViewportContext.Provider>
    );
};
