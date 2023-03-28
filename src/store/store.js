import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';

//Root reducer that combines all the reducer in one
const rootReducer = combineReducers({
  search: searchReducer,
});

//Store the global state of tha app based on the reducers
export const store = configureStore({
  reducer: rootReducer
});
