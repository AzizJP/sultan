import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Counter} from '../../types/types';

const initialState: Counter = {
  count: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      if (state.count === 1) return;
      state.count -= action.payload;
    },
  },
});

export const {increment, decrement, setCount} = counterSlice.actions;

export default counterSlice.reducer;
