/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import productReducer from './productSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const store = configureStore({
  reducer: {
    products: productReducer,
    user: persistReducer(persistConfig, userReducer)
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;