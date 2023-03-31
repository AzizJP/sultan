import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardTypes} from '../../components/Card/Card.types';
import {Card} from '../../types/types';

const initialState: Card = {
  card: JSON.parse(localStorage.getItem('currentCard')) || {
    url: '',
    name: '',
    dimensionType: '',
    dimension: '',
    barcode: '',
    manufacturer: '',
    brand: '',
    description: '',
    price: 0,
    careType: [],
  },
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCard(state, action: PayloadAction<CardTypes>) {
      state.card = action.payload;
    },
  },
});

export const {setCard} = cardSlice.actions;

export default cardSlice.reducer;
