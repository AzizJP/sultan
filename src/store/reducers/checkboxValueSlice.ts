import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CheckboxValuesType} from '../../types/types';

const initialState: CheckboxValuesType = {
  checkboxValues: [],
};

export const checkboxValuesSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setCheckboxValues(state, action: PayloadAction<CheckboxValuesType['checkboxValues']>) {
      state.checkboxValues = action.payload;
    },
  },
});

export const {setCheckboxValues} = checkboxValuesSlice.actions;

export default checkboxValuesSlice.reducer;
