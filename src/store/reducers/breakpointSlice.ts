import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Breakpoint} from '../../types/types';

const initialState: Breakpoint = {
  isDesktop: true,
  isLaptop: true,
};

export const breakpointSlice = createSlice({
  name: 'breakpoint',
  initialState,
  reducers: {
    setIsDesktop(state, action: PayloadAction<boolean>) {
      state.isDesktop = action.payload;
    },
    setIsLaptop(state, action: PayloadAction<boolean>) {
      state.isLaptop = action.payload;
    },
  },
});

export const {setIsDesktop, setIsLaptop} = breakpointSlice.actions;

export default breakpointSlice.reducer;
