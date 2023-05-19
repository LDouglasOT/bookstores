import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorySlice from './categories/categorySlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categorySlice,
  },
});

export default store;
