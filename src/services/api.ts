import axios from "axios";

export const ENDPOINT = "products";

export const api = axios.create({
    baseURL: "https://api-challenge.starsoft.games/api/v1/"
});
