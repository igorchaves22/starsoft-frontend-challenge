import { Cart, CartProductList } from "~types";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const CART_CONFIG = {
    localStorageKey: "starsoft-cart",
    initialState: {
        products: [],
        totalProducts: 0,
        totalPrice: 0
    } as Cart
} as const;

export const getCartFromLocalStorage = () => getLocalStorageItem<Cart>(CART_CONFIG.localStorageKey);

export const saveCartToLocalStorage = (cart: Cart) => setLocalStorageItem<Cart>(CART_CONFIG.localStorageKey, cart);

export const calculateCartTotal = (products: CartProductList, key: "price" | "quantity"): number => {
    let totalSum = 0;
    const calculate = products.reduce((accumulator, currentProduct) => {
        const { price, quantity } = currentProduct;

        if (key === "price") totalSum = accumulator + parseFloat(price) * quantity;
        if (key === "quantity") totalSum = accumulator + quantity;

        return totalSum;
    }, 0);

    return calculate;
};
