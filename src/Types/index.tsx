/* eslint-disable */
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
  formData: ICreditForm;
  responsePayment: any;
  productSelected: Product | null;
}

export interface ICreditForm {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus: string | undefined;
}

export enum formFieldEnum {
  number = "number",
  name = "name",
  expiry = "expiry",
  cvc = "cvc"
}
