/* eslint-disable */
import { useEffect } from "react";
import { AppDispatch } from "Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "Store/productSlice";
import {
  onSelectedProduct,
  handleShowModal,
  onHandleCreditCardNumber,
  onHandleCreditCardCvc,
  onHandleCreditCardExpiry,
  onHandleCreditCardName,
  onHandleCreditCardFocus,
  setResponsePayment,
  onChangeStep,
} from "Store/userSlice";

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productData: products, loading } = useSelector(
    (state: any) => state.products
  );
  const { productSelected, isOpenModal, isMounted } = useSelector(
    (state: any) => state.user
  );

  const onCloseModal = () => {
    dispatch(handleShowModal(false));
    dispatch(onSelectedProduct(null));
    dispatch(onHandleCreditCardNumber(""));
    dispatch(onHandleCreditCardCvc(""));
    dispatch(onHandleCreditCardExpiry(""));
    dispatch(onHandleCreditCardName(""));
    dispatch(onHandleCreditCardFocus(""));
    dispatch(setResponsePayment(null));
    dispatch(onChangeStep(1));
  };

  useEffect(() => {
    const el = document.getElementById("body") as HTMLElement;

    if (!isOpenModal) {
      el.style.overflow = "auto";
    } else {
      el.style.overflow = "hidden";
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (productSelected) {
      dispatch(handleShowModal(true));
    }
  }, [productSelected]);

  useEffect(() => {
    if(!products) {
      dispatch(fetchProduct());
    }
  }, []);

  return { products, loading, isOpenModal, onCloseModal, fetchProduct };
};
