import { Product } from "./api";

export type CartProductList = CartProduct[];

export interface CartProduct extends Product {
    quantity: number;
}
export interface Cart {
    products: CartProductList;
    totalProducts: number;
    totalPrice: number;
}
