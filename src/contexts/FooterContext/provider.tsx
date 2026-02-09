"use client";

import { useRef } from "react";
import type { Children } from "~types";
import { FooterContext } from "./context";
import { ElementRef } from "./types";

export const FooterContextProvider = ({ children }: Children) => {
    const footerRef = useRef<ElementRef>(null);

    return <FooterContext value={{ footerRef }}>{children}</FooterContext>;
};
