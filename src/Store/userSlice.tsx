/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { USER_INITIAL_STATE } from "Constants";
import type { UserState } from "Types";

const initialState = USER_INITIAL_STATE as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeStep: (state, { payload }) => {
      return {
        ...state,
        formStep: payload,
      };
    },
    onSelectedProduct: (state, { payload }) => {
      return {
        ...state,
        productSelected: payload,
      };
    },
    onHandleFormData: (state, { payload }) => {
      return {
        ...state,
        formData: payload,
      };
    },
    handleShowModal: (state, { payload }) => {
      return {
        ...state,
        isOpenModal: payload,
      };
    },
    setResponsePayment: (state, { payload }) => {
      return {
        ...state,
        responsePayment: payload,
      };
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  onChangeStep,
  onSelectedProduct,
  onHandleFormData,
  handleShowModal,
  setResponsePayment,
} = actions;
export default reducer;
