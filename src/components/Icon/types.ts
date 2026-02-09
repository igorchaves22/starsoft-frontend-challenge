import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import type { ICONS } from "./constants";

export interface IconProps extends Pick<PhosphorIconProps, "weight"> {
    icon: keyof typeof ICONS;
    color?: "brand" | "primary" | "secondary" | "interactive";
    size?: "sm" | "base" | "lg";
}
