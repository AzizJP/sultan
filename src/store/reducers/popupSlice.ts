import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Popup} from '../../types/types';

const initialState: Popup = {
  isPopupOpen: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsPopupOpen(state, action: PayloadAction<boolean>) {
      state.isPopupOpen = action.payload;
    },
  },
});

export const {setIsPopupOpen} = popupSlice.actions;

export default popupSlice.reducer;
