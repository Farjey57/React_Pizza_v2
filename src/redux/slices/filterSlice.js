import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности (наиболее)',
    sortProperty: 'rating',
    order: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload; /* payload хранит переданное значение */
    },
  },
});

export const { setCategoryId } = filterSlice.actions; /* Чтобы импортировать */

export default filterSlice.reducer;
