import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ActiveFilter} from '../../types/types';

type Property = keyof ActiveFilter;

type Action = {
  key: Property;
  value: ActiveFilter[Property];
};

const initialState: ActiveFilter = {
  activeType: JSON.parse(localStorage.getItem('activeType')),
  activePrice: JSON.parse(localStorage.getItem('activePrice')) || [0, 10000],
  activeSort: JSON.parse(localStorage.getItem('activeSort')) || 'Название по возрастанию',
  activeManufacturer: JSON.parse(localStorage.getItem('activeManufacturer')) || [],
};

export const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<Action>) {
      if (action.payload.key === 'activePrice') {
        state[action.payload.key] = action.payload.value as ActiveFilter['activePrice'];
      }
      if (action.payload.key === 'activeType') {
        state[action.payload.key] = action.payload.value as ActiveFilter['activeType'];
      }
      if (action.payload.key === 'activeSort') {
        state[action.payload.key] = action.payload.value as ActiveFilter['activeSort'];
      }
      if (action.payload.key === 'activeManufacturer') {
        state[action.payload.key] = action.payload.value as ActiveFilter['activeManufacturer'];
      }
    },
  },
});

export const {setActiveFilter} = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
