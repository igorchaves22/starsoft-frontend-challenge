export const setLocalStorageItem = <T>(key: string, item: T) => {
    if (typeof window === "undefined") return;

    const jsonValue = JSON.stringify(item);

    return localStorage.setItem(key, jsonValue);
};

export const getLocalStorageItem = <T>(key: string) => {
    if (typeof window === "undefined") return null;

    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item) as T;
};

export const removeLocalStorageItem = (key: string) => {
    if (typeof window === "undefined") return;

    return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
    if (typeof window === "undefined") return;

    return localStorage.clear();
};
