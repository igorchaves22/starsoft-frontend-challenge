import { ApiDataResponse, ApiQueries } from "~types";
import { api, ENDPOINT } from "./api";

export const getProducts = async ({ page, rows, sortBy, orderBy }: ApiQueries) => {
    const url = `${ENDPOINT}?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
    const { data } = await api.get<ApiDataResponse>(url).then((response) => response);

    return data;
};
