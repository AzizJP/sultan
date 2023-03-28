import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardName} from '../../types/types';

const initialState: CardName = {
  cardName: '',
};

export const cardSlice = createSlice({
  name: 'cardName',
  initialState,
  reducers: {
    setCardName(state, action: PayloadAction<string>) {
      state.cardName = action.payload;
    },
  },
});

export const {setCardName} = cardSlice.actions;

export default cardSlice.reducer;
