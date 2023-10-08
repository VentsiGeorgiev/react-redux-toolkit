import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counterSlice/counterSlice';
import { apiSlice } from '../feature/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});