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

export interface UserState {
    formStep: number;
    isOpenModal: boolean;
    number: string;
    name: string;
    expiry: string;
    cvc: string;
    focus: string | undefined;
    responsePayment: any;
    productSelected: Product | null
}