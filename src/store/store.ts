import {combineReducers, configureStore} from '@reduxjs/toolkit';

import basketReducer from './reducers/basketSlice';
import breakpointReducer from './reducers/breakpointSlice';
import cardInfoReducer from './reducers/cardInfoSlice';
import cardReducer from './reducers/cardSlice';
import cardsReducer from './reducers/cardsSlice';
import counterReducer from './reducers/counterSlice';

const rootReducer = combineReducers({
  basketReducer,
  breakpointReducer,
  cardsReducer,
  cardReducer,
  counterReducer,
  cardInfoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
