import {combineReducers, configureStore} from '@reduxjs/toolkit';

import basketReducer from './reducers/basketSlice';
import breakpointReducer from './reducers/breakpointSlice';

const rootReducer = combineReducers({
  basketReducer,
  breakpointReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
