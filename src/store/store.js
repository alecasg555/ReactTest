import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';


const rootReducer = combineReducers({
  search: searchReducer,
});
export const store = configureStore({
  reducer: rootReducer
});
