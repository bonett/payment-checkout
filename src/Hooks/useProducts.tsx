/* eslint-disable */
import { useEffect } from "react";
import { AppDispatch } from "Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "Store/productSlice";
import {
  onSelectedProduct,
  handleShowModal,
  onHandleFormData,
  setResponsePayment,
  onChangeStep,
} from "Store/userSlice";
import { USER_INITIAL_STATE } from "Constants";

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productData: products, loading } = useSelector(
    (state: any) => state.products
  );
  const { productSelected, isOpenModal } = useSelector(
    (state: any) => state.user
  );

  const onCloseModal = () => {
    dispatch(onChangeStep(USER_INITIAL_STATE.formStep));
    dispatch(handleShowModal(USER_INITIAL_STATE.isOpenModal));
    dispatch(onSelectedProduct(USER_INITIAL_STATE.productSelected));
    dispatch(setResponsePayment(USER_INITIAL_STATE.responsePayment));
    dispatch(
      onHandleFormData(USER_INITIAL_STATE.formData)
    );
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
    if (!products) {
      dispatch(fetchProduct());
    }
  }, []);

  return { products, loading, isOpenModal, onCloseModal, fetchProduct };
};
