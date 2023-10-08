import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counterSlice/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});