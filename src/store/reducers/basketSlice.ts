import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardTypes} from '../../components/Card/Card.types';
import {Basket} from '../../types/types';

const initialState: Basket = {
  basket: JSON.parse(localStorage.getItem('basketArr')) || [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<Array<CardTypes>>) {
      state.basket = action.payload;
    },
  },
});

export const {setBasket} = basketSlice.actions;

export default basketSlice.reducer;
