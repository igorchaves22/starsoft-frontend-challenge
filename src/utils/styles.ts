export const applyClassNameIfTrue = (condition: unknown, text: string, elseText?: string, noSpace?: boolean) => {
    const prefixSpace = `${noSpace ? "" : " "}`;

    if (!condition) {
        if (!elseText) return "";

        return `${prefixSpace}${elseText}`;
    }

    return `${prefixSpace}${text}`;
};
