import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PageCounter} from '../../types/types';

const initialState: PageCounter = {
  page: JSON.parse(localStorage.getItem('catalogPage')) || 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    incrementPage(state, action: PayloadAction<number>) {
      state.page += action.payload;
    },
    decrementPage(state, action: PayloadAction<number>) {
      if (state.page === 1) return;
      state.page -= action.payload;
    },
  },
});

export const {incrementPage, decrementPage, setPage} = pageSlice.actions;

export default pageSlice.reducer;
