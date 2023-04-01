import {combineReducers, configureStore} from '@reduxjs/toolkit';

import activeFilterReducer from './reducers/activeFilterSlice';
import basketReducer from './reducers/basketSlice';
import breakpointReducer from './reducers/breakpointSlice';
import cardInfoReducer from './reducers/cardInfoSlice';
import cardNameReducer from './reducers/cardNameSlice';
import cardsReducer from './reducers/cardsSlice';
import counterReducer from './reducers/counterSlice';
import pageReducer from './reducers/pageSlice';
import popupReducer from './reducers/popupSlice';
import sortTypeReducer from './reducers/sortTypeSlice';

const rootReducer = combineReducers({
  basket: basketReducer,
  breakpoint: breakpointReducer,
  cards: cardsReducer,
  cardName: cardNameReducer,
  counter: counterReducer,
  cardInfo: cardInfoReducer,
  popup: popupReducer,
  page: pageReducer,
  activeFilter: activeFilterReducer,
  currentSortType: sortTypeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
