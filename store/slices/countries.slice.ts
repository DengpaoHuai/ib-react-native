import { createSlice } from "@reduxjs/toolkit";
import { ADD, SET_ALL } from "../actions/countries.actions";
import { getCountriesAction } from "../thunkActions/countries.actions";

export type Country = {
  _id: string;
  name: string;
  region: string;
  population: number;
};

type State = {
  countries: Country[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  countries: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    add(state, action) {
      state.countries.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountriesAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCountriesAction.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    });
    builder.addCase(getCountriesAction.rejected, (state, action) => {
      state.error = action.error.message ?? null;
      state.loading = false;
    });
  },
});

export const { add } = countriesSlice.actions;

export default countriesSlice.reducer;
