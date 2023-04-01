import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ActiveFilter} from '../../types/types';

const initialState: ActiveFilter = {
  activeFilter: JSON.parse(localStorage.getItem('activeFilter')),
};

export const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<ActiveFilter['activeFilter']>) {
      state.activeFilter = action.payload;
    },
  },
});

export const {setActiveFilter} = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
