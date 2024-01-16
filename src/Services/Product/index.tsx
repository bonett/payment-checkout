/* eslint-disable */
import { RESPONSE_SERVER } from "Constants";
import { type Product } from "Types";

const fakeCallApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockList = RESPONSE_SERVER;
            resolve({ json: () => mockList });
        }, 1000);
    });
}

export const getProducts = async () => {
    try {
        const response: unknown | any = await fakeCallApi();
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getProductDetails = async (id: string) => {
    const products: Product[] = await getProducts();
    return products.filter((product: Product) => product.id === id)[0];
}