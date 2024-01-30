/* eslint-disable */
import { useEffect, useState } from "react";
import { AppDispatch } from "Store";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeStep,
  onHandleFormData,
  setResponsePayment,
} from "Store/userSlice";
import { payementProduct } from "Services/Product";
import { formFieldEnum } from "Types";

export const usePayment = () => {
  const [userFormData, setUserFormData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { formStep, productSelected, formData } = useSelector(
    (state: any) => state.user
  );

  const handleInputChange = (evt: any, type: string) => {
    const value = type in formFieldEnum ?  evt.target.value : evt.target.name;

    setUserFormData((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleChangeStepper = (step: number) => {
    if (step < 3) {
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
        number: formData.number,
        name: formData.name,
        expiry: formData.expiry,
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

  useEffect(() => {
    dispatch(
      onHandleFormData({
        ...userFormData,
      })
    );
  }, [userFormData]);

  return {
    formStep,
    formData,
    productSelected,
    handleChangeStepper,
    handleInputChange,
    makePaymentProduct,
    loading,
    error,
  };
};
