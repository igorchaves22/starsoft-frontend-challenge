import { Footer, Header, Main, PageContainer, QueryProvider, ScrollToTopButton, StoreProvider } from "~components";
import { FooterContextProvider, QueryControlsContextProvider, ViewportContextProvider } from "~contexts";
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
                                <QueryControlsContextProvider>
                                    <Main>{children}</Main>
                                </QueryControlsContextProvider>
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
