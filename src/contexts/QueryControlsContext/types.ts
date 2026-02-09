import { FetchQueries, ProductList } from "~types";

export interface QueryControlsContextProps {
    queries: FetchQueries;
    handleQuery: <K extends keyof FetchQueries>(key: K, value: FetchQueries[K]) => void;
    isError: boolean;
    data: {
        products: ProductList;
        count: {
            current: number;
            total: number;
        };
    };
    hasNextPage: boolean;
    loadMore: () => void;
}
