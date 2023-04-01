import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardName} from '../../types/types';

const initialState: CardName = {
  cardName: JSON.parse(localStorage.getItem('currentCardName')),
};

export const cardNameSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardName(state, action: PayloadAction<string>) {
      state.cardName = action.payload;
    },
  },
});

export const {setCardName} = cardNameSlice.actions;

export default cardNameSlice.reducer;
