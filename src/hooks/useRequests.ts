"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FetchQueries } from "types/requests";
import { getProducts } from "~services";
import { ApiDataResponse, ApiErrorResponse } from "~types";

export const useFetchProducts = (queries: FetchQueries) => {
    const { isLoading, isError, data, hasNextPage, fetchNextPage } = useInfiniteQuery<
        ApiDataResponse,
        AxiosError<ApiErrorResponse>,
        InfiniteData<ApiDataResponse>,
        ["products", FetchQueries],
        number
    >({
        queryKey: ["products", queries],
        queryFn: ({ pageParam = 1 }) => getProducts({ ...queries, page: pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalLoadedItems = allPages.reduce(
                (accumulator, currentPage) => accumulator + currentPage.products.length,
                0
            );
            const hasMoreItems = totalLoadedItems < lastPage.count;

            if (!hasMoreItems) return undefined;

            const nextPage = allPages.length + 1;

            return nextPage;
        }
    });
    const products = data?.pages.flatMap((page) => page.products) ?? [];
    const count = {
        current: products.length,
        total: data?.pages[0]?.count ?? 0
    };

    return {
        isLoading,
        isError,
        data: { products, count },
        loadMore: fetchNextPage,
        hasNextPage
    };
};
