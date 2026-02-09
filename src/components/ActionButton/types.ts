import { ButtonHTMLAttributes } from "react";

export interface ActionButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "onClick"> {
    isDark?: boolean;
    isMax?: boolean;
    text: string;
}
