import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const themeStore = configureStore({
  reducer: {
    theme: themeReducer
  }
});