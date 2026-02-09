import type { ReactNode } from "react";

export const renderElementIfTrue = (condition: unknown, element: ReactNode, elseElement?: ReactNode) => {
    if (!condition) {
        if (!elseElement) return null;

        return elseElement;
    }

    return element;
};
