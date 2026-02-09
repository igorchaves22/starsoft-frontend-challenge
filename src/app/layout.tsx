import { Footer, Header, Main, PageContainer, QueryProvider, ScrollToTopButton, StoreProvider } from "~components";
import { Children } from "~types";
import { poppins } from "~utils";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body className={poppins.className}>
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
