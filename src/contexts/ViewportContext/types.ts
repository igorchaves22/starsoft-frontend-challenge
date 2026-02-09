export interface ViewportContextProps {
    viewportSize: {
        width: number;
        height: number;
    };
    scrollOffsetY: number;
    checkThreshold: (type: "width" | "scroll", threshold: number, isBelow?: boolean) => boolean;
}
