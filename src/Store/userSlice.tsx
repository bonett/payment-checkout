/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "Types";

const initialState = {
  formStep: 3,
  isOpenModal: false,
  number: "",
  expiry: "",
  cvc: "",
  name: "",
  focus: "",
  productSelected: null,
  responsePayment: null,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeStep: (state, param) => {
      const { payload } = param;
      state.formStep = payload;
    },
    onSelectedProduct: (state, param) => {
      const { payload } = param;
      state.productSelected = payload;
    },
    onHandleCreditCardNumber: (state, param) => {
      const { payload } = param;
      state.number = payload;
    },
    onHandleCreditCardName: (state, param) => {
      const { payload } = param;1
      state.name = payload;
    },
    onHandleCreditCardExpiry: (state, param) => {
      const { payload } = param;
      state.expiry = payload;
    },
    onHandleCreditCardCvc: (state, param) => {
      const { payload } = param;
      state.cvc = payload;
    },
    onHandleCreditCardFocus: (state, param) => {
      const { payload } = param;
      state.focus = payload;
    },
    handleShowModal: (state, param) => {
      const { payload } = param;
      state.isOpenModal = payload;
    },
    setResponsePayment: (state, param) => {
      const { payload } = param;
      state.responsePayment = payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  onChangeStep,
  onSelectedProduct,
  onHandleCreditCardNumber,
  onHandleCreditCardName,
  onHandleCreditCardExpiry,
  onHandleCreditCardCvc,
  onHandleCreditCardFocus,
  handleShowModal,
  setResponsePayment
} = actions;
export default reducer;
