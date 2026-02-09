"use client";

import { useCallback, useContext, useEffect, useEffectEvent, useLayoutEffect, useState } from "react";
import { FooterContext, ViewportContext } from "~contexts";
import { useDoubleTransitionState } from "~hooks";
import { EXIT_ANIMATION_DURATION_MS, SASS_SPACING, SCROLL_THRESHOLD } from "./constants";

export const useController = () => {
    const {
        viewportSize: { height: viewportHeight },
        scrollOffsetY,
        checkThreshold
    } = useContext(ViewportContext);
    const { footerRef } = useContext(FooterContext);
    const { state: isRendered, toggleState: toggleRender } = useDoubleTransitionState();
    const [footerOffset, setFooterOffset] = useState<number | undefined>(undefined);

    const isScrolled = checkThreshold("scroll", SCROLL_THRESHOLD);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleRender = useCallback(
        () => toggleRender(isScrolled, isRendered.immediate ? EXIT_ANIMATION_DURATION_MS : 0),
        [isRendered.immediate, isScrolled, toggleRender]
    );
    const handleFooterOffset = useCallback(() => {
        const footerElement = footerRef.current;

        if (!footerElement) return;

        const footerBounds = footerElement.getBoundingClientRect();
        const isVisible = footerBounds.top < viewportHeight;

        setFooterOffset(isVisible ? viewportHeight - footerBounds.top + SASS_SPACING : undefined);
    }, [footerRef, viewportHeight]);
    const handleScrollEffects = useEffectEvent(() => {
        handleRender();
        handleFooterOffset();
    });

    useLayoutEffect(() => handleScrollEffects());
    useEffect(() => handleScrollEffects(), [handleFooterOffset, handleRender, scrollOffsetY]);

    return { isRendered, scrollToTop, footerOffset };
};
