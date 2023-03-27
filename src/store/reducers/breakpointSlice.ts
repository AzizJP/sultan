import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Breakpoint} from '../../types/types';

const initialState: Breakpoint = {
  isDesktop: true,
};

export const breakpointSlice = createSlice({
  name: 'breakpoint',
  initialState,
  reducers: {
    setIsDesktop(state, action: PayloadAction<boolean>) {
      state.isDesktop = action.payload;
    },
  },
});

export const {setIsDesktop} = breakpointSlice.actions;

export default breakpointSlice.reducer;
