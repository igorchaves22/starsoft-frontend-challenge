"use client";

import { applyClassNameIfTrue, renderElementIfTrue } from "~utils";
import { Icon } from "../Icon";
import { useController } from "./useController";
import "./styles.scss";

export const ScrollToTopButton = () => {
    const { isRendered, scrollToTop, footerOffset } = useController();

    return renderElementIfTrue(
        isRendered.delayed,
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            style={{
                bottom: footerOffset ? `${footerOffset}px` : undefined
            }}
            className={`scroll-to-top-button scroll-to-top-button--${applyClassNameIfTrue(isRendered.immediate, "show", "hide", true)}`}
        >
            <Icon
                icon="CaretUp"
                weight="bold"
                size="lg"
            />
        </button>
    );
};
