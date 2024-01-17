/* eslint-disable */
import { RESPONSE_SERVER, TAXES } from "Constants";
import { type Product } from "Types";

const fakeCallApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockList = RESPONSE_SERVER;
      resolve({ json: () => mockList });
    }, 1000);
  });
};

const fakePaymentApi = (payload: any) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const paymentYear = payload.expiry.split("/");

      const fakeResponse = {
        status: 403,
        message: "Error, please try again...",
      };

      const successResponse = {
        status: 201,
        message: "Payment successfully",
        payment: {
          product: payload.title,
          price: TAXES + payload.price,
          date: new Date(),
        },
      };

      if (parseInt(paymentYear[1]) >= 24) {
        resolve({ json: () => successResponse });
      } else {
        rejected({ json: () => fakeResponse });
      }
    }, 3000);
  });
};

export const getProducts = async () => {
  try {
    const response: unknown | any = await fakeCallApi();
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getProductDetails = async (id: string) => {
  const products: Product[] = await getProducts();
  return products.filter((product: Product) => product.id === id)[0];
};

export const payementProduct = async (payload: any) => {
  try {
    const response: unknown | any = await fakePaymentApi(payload);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: 403,
      message: "Error, something was wrong with your card",
    }
  }
};
