import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const cartStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});