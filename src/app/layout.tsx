import { Footer, Header, Main, PageContainer, ScrollToTopButton } from "~components";
import { Children } from "~types";
import { poppins } from "~utils";
import "~styles";

export default function RootLayout({ children }: Children) {
    return (
        <html>
            <body className={poppins.className}>
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
