import Crypto from "crypto-js";
import { SECRET_KEY } from 'Setup/Env';

export const moneyFormatter = (price: any, currencyId: string) => {
    return price.toLocaleString("es-CO", {
        currency: currencyId,
        style: "currency",
        minimumFractionDigits: 0
    })
}

export const encryptAES = (value: string) => {
  return Crypto.AES.encrypt(value, SECRET_KEY as any).toString();
};

export const decryptAES = (value: string) => {
  const bytes = Crypto.AES.decrypt(value, SECRET_KEY as any);
  return bytes.toString(Crypto.enc.Utf8);
};
