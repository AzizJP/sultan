import {combineReducers, configureStore} from '@reduxjs/toolkit';

import basketReducer from './reducers/basketSlice';
import breakpointReducer from './reducers/breakpointSlice';
import cardReducer from './reducers/cardSlice';

const rootReducer = combineReducers({
  basketReducer,
  breakpointReducer,
  cardReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
