import { ApiQueries } from "./api";

export type FetchQueries = Omit<ApiQueries, "page">;
