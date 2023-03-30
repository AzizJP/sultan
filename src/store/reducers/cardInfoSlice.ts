import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CardInfo} from '../../types/types';

const initialState: CardInfo = {
  isOpenDescription: false,
  isOpenSpecification: false,
};

export const cardInfoSlice = createSlice({
  name: 'cardInfo',
  initialState,
  reducers: {
    setIsOpenDescription(state, action: PayloadAction<boolean>) {
      state.isOpenDescription = action.payload;
    },
    setIsOpenSpecification(state, action: PayloadAction<boolean>) {
      state.isOpenSpecification = action.payload;
    },
  },
});

export const {setIsOpenDescription, setIsOpenSpecification} = cardInfoSlice.actions;

export default cardInfoSlice.reducer;
