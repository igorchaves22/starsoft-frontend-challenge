import { applyClassNameIfTrue } from "~utils";
import { ActionButtonProps } from "./types";
import "./styles.scss";

export const ActionButton = ({ isDark, isMax, text, ...rest }: ActionButtonProps) => (
    <button
        type="button"
        className={
            "action-button" +
            applyClassNameIfTrue(isMax, "action-button--max") +
            applyClassNameIfTrue(isDark, "action-button--dark")
        }
        {...rest}
    >
        {text}
    </button>
);
