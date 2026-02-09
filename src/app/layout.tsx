import { Footer, Header, Main, PageContainer, ScrollToTopButton } from "~components";
import { Children } from "~types";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body>
                <PageContainer>
                    <Header />
                    <Main>{children}</Main>
                    <ScrollToTopButton />
                    <Footer />
                </PageContainer>
            </body>
        </html>
    );
}
