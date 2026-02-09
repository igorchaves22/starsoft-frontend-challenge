"use client";

import { useCallback, useState } from "react";
import { useFetchProducts } from "~hooks";
import { Children, FetchQueries } from "~types";
import { QueryControlsContext } from "./context";

export const QueryControlsContextProvider = ({ children }: Children) => {
    const [queries, setQueries] = useState<FetchQueries>({
        rows: 10,
        sortBy: "id",
        orderBy: "ASC"
    });
    const { isError, data, hasNextPage, loadMore } = useFetchProducts(queries);

    const handleQuery = useCallback(<K extends keyof FetchQueries>(key: K, value: FetchQueries[K]) => {
        setQueries((prev) => ({
            ...prev,
            [key]: value
        }));
    }, []);

    return (
        <QueryControlsContext.Provider value={{ queries, handleQuery, isError, data, hasNextPage, loadMore }}>
            {children}
        </QueryControlsContext.Provider>
    );
};
