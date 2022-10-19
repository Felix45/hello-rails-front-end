import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/greetingsSlice';

const reducer = {
  greetings: greetingsReducer,
};

const store = configureStore({ reducer });

export default store;
