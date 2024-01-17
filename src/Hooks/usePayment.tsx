/* eslint-disable */
import { useState } from "react";
import { AppDispatch } from "Store";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeStep,
  onHandleCreditCardNumber,
  onHandleCreditCardName,
  onHandleCreditCardExpiry,
  onHandleCreditCardCvc,
  onHandleCreditCardFocus,
  setResponsePayment,
} from "Store/userSlice";
import { payementProduct } from "Services/Product";

export const usePayment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { formStep, number, name, expiry, cvc, productSelected } = useSelector(
    (state: any) => state.user
  );

  const handleInputChange = (evt: any, type: string) => {
    const { value } = evt.target;

    if (type === "number") {
      dispatch(onHandleCreditCardNumber(value));
    }

    if (type === "name") {
      dispatch(onHandleCreditCardName(value));
    }

    if (type === "expiry") {
      dispatch(onHandleCreditCardExpiry(value));
    }

    if (type === "cvc") {
      dispatch(onHandleCreditCardCvc(value));
    }
  };

  const handleInputFocus = (evt: any) => {
    dispatch(onHandleCreditCardFocus(evt.target.name));
  };

  const handleChangeStepper = (step: number) => {
    if(step < 3) {
      dispatch(onChangeStep(step));
    } else {
      dispatch(onChangeStep(step));
      setLoading(true);
    }
  };

  const makePaymentProduct = async () => {
    try {
      setLoading(true);
      const response = await payementProduct({
        number,
        name,
        expiry,
        ...productSelected,
      });

      if (response) {
        dispatch(setResponsePayment(response));
      }

      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return {
    formStep,
    number,
    name,
    expiry,
    cvc,
    productSelected,
    handleChangeStepper,
    handleInputChange,
    handleInputFocus,
    makePaymentProduct,
    loading,
    error,
  };
};
