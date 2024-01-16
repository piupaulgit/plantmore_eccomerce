import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice";
import UserReducer from './userSlice';
import ProductsSlice from './ProductsSlice';
import BannerSlice from './BannerSlice';
import CategorySlice from './CategorySlice';

export const store = configureStore({
  reducer: {
    ModalReducer,
    UserReducer,
    ProductsSlice,
    BannerSlice,
    CategorySlice
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
