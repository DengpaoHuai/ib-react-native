import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries.slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useCustomDispatch = () => store.dispatch;
