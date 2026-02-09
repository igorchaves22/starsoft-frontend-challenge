import { Footer, Header, Main, PageContainer, QueryProvider, ScrollToTopButton, StoreProvider } from "~components";
import { Children } from "~types";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body>
                <PageContainer>
                    <QueryProvider>
                        <StoreProvider>
                            <Header />
                            <Main>{children}</Main>
                        </StoreProvider>
                    </QueryProvider>
                    <ScrollToTopButton />
                    <Footer />
                </PageContainer>
            </body>
        </html>
    );
}
