import { Footer, Header, Main, PageContainer, QueryProvider, ScrollToTopButton } from "~components";
import { Children } from "~types";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body>
                <PageContainer>
                    <QueryProvider>
                        <Header />
                        <Main>{children}</Main>
                    </QueryProvider>
                    <ScrollToTopButton />
                    <Footer />
                </PageContainer>
            </body>
        </html>
    );
}
