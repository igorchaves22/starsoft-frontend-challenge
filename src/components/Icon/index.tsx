"use client";

import { applyClassNameIfTrue } from "~utils";
import { ICONS } from "./constants";
import type { IconProps } from "./types";
import "./styles.scss";

export const Icon = ({ icon, color, size, weight }: IconProps) => {
    const Element = ICONS[icon];

    return (
        <Element
            weight={weight}
            className={
                "icon" +
                applyClassNameIfTrue(color, `icon--color-${color}`) +
                applyClassNameIfTrue(size, `icon--size-${size}`)
            }
        />
    );
};
