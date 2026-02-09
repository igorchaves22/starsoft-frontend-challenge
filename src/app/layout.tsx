import { Footer, Header, Main, PageContainer, QueryProvider, ScrollToTopButton, StoreProvider } from "~components";
import { FooterContextProvider, ViewportContextProvider } from "~contexts";
import { Children } from "~types";
import { poppins } from "~utils";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body className={poppins.className}>
                <ViewportContextProvider>
                    <PageContainer>
                        <QueryProvider>
                            <StoreProvider>
                                <Header />
                                <Main>{children}</Main>
                            </StoreProvider>
                        </QueryProvider>
                        <FooterContextProvider>
                            <ScrollToTopButton />
                            <Footer />
                        </FooterContextProvider>
                    </PageContainer>
                </ViewportContextProvider>
            </body>
        </html>
    );
}
