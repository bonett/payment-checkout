export interface Product {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    thumbnail: string;
    description: string;
}

export interface ProductState {
    productData: any;
    loading: boolean;
    error: string | null;
}