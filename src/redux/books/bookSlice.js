import { createSlice } from '@reduxjs/toolkit';
/* eslint no-param-reassign: "error" */
const initialState = {
  books: [{
    id: 'item',
    titleName: 'The warring princes',
    author: 'Luzinda Douglas',
  }, {
    id: 'item',
    titleName: 'Cognitives sciences',
    author: 'Jemba Peter',
  }, {
    id: 'item3',
    titleName: 'Killing Mr Json',
    author: 'Luzinda Kak',
  }, {
    id: 'item4',
    titleName: 'Price tags',
    author: 'Luzinda',
  }],
  count: 0,
};

export const bookReducer = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addbook: (state, action) => {
      const book = [...state.books, action.payload];
      state.books = book;
    },
    removebook: (state, action) => {
      const book = state.books.filter((item) => item.id !== action.payload.id);
      state.books = book;
    },
  },
});

export const { addbook, removebook } = bookReducer.actions;
export default bookReducer.reducer;
