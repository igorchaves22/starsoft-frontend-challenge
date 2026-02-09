import { RefObject } from "react";

export type ElementRef = null | HTMLElement;

export interface FooterContextProps {
    footerRef: RefObject<ElementRef>;
}
