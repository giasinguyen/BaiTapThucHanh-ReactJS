import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const authStore = configureStore({
  reducer: {
    auth: authReducer
  }
});