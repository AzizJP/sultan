import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SortType} from '../../types/types';

const initialState: SortType = {
  currentSortType: JSON.parse(localStorage.getItem('currentSortType')),
};

export const sortTypeSlice = createSlice({
  name: 'currentSortType',
  initialState,
  reducers: {
    setCurrentSortType(state, action: PayloadAction<SortType['currentSortType']>) {
      state.currentSortType = action.payload;
    },
  },
});

export const {setCurrentSortType} = sortTypeSlice.actions;

export default sortTypeSlice.reducer;
