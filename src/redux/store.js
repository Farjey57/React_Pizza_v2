import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter /* отдельный слайс, логический блок, раобтник*/,
  },
});

console.log(store);
