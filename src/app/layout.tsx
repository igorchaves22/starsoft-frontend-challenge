import { Children } from "~types";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
