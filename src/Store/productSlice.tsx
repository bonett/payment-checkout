/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from 'Services/Product';
import { ProductState } from 'Types';

const initialState: ProductState = {
    productData: null,
    loading: false,
    error: null,
};

export const fetchProduct = createAsyncThunk(
    'products/fetchProducts', async () => {
        const response = await getProducts();
        return response;
    });

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export default productSlice.reducer;