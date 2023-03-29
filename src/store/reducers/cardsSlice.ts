import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardTypes} from '../../components/Card/Card.types';

// eslint-disable-next-line import/no-unresolved
import initialCards from '../../Data/Goods.json';
import {Cards} from '../../types/types';

const initialState: Cards = {
  cards: JSON.parse(localStorage.getItem('cards')) || initialCards,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<Array<CardTypes>>) {
      state.cards = action.payload;
    },
  },
});

export const {setCards} = cardsSlice.actions;

export default cardsSlice.reducer;
