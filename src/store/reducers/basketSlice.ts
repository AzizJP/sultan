import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Basket, Goods} from '../../types/types';

const initialState: Basket = {
  amount: 0,
  sum: 15000,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setAmount(state, action: PayloadAction<Array<Goods>>) {
      state.amount = action.payload.length;
    },
    setSum(state, action: PayloadAction<Array<Goods>>) {
      state.sum = action.payload.reduce((acc, item) => acc + item.price, 0);
    },
  },
});

export const {setAmount, setSum} = basketSlice.actions;

export default basketSlice.reducer;
