import { Metadata } from "next";
import {
    CartHydrator,
    Footer,
    Header,
    Main,
    PageContainer,
    QueryProvider,
    ScrollToTopButton,
    StoreProvider
} from "~components";
import { FooterContextProvider, QueryControlsContextProvider, ViewportContextProvider } from "~contexts";
import { Children } from "~types";
import { poppins } from "~utils";
import "~styles";

export const metadata: Metadata = {
    title: "Starsoft",
    description:
        "Explore e compre NFTs em nosso marketplace. Descubra coleções exclusivas, veja detalhes de cada item e gerencie seu carrinho de compras de forma fácil e intuitiva.",
    keywords: ["NFT", "marketplace", "comprar NFTs", "coleções digitais"],
    robots: {
        index: true,
        follow: true,
        nocache: false
    },
    authors: [{ name: "Igor Gabriel Vieira Chaves" }]
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ViewportContextProvider>
                    <PageContainer>
                        <QueryProvider>
                            <StoreProvider>
                                <CartHydrator />
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
