import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SidebarSearchType} from '../../types/types';

const initialState: SidebarSearchType = {
  cardAfterSearch: [],
};

export const sidebarSearchSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setCardAfterSearch(state, action: PayloadAction<SidebarSearchType['cardAfterSearch']>) {
      state.cardAfterSearch = action.payload;
    },
  },
});

export const {setCardAfterSearch} = sidebarSearchSlice.actions;

export default sidebarSearchSlice.reducer;
