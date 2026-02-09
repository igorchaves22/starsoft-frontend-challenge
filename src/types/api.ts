export type ProductList = Product[];

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    createdAt: string;
}
export interface ApiDataResponse {
    products: ProductList;
    count: number;
}
export interface ApiErrorResponse {
    message: string;
}
export interface ApiQueries {
    page: number;
    rows: number;
    sortBy: "id" | "name" | "price";
    orderBy: "ASC" | "DESC";
}
