import { getCountries } from "@/services/countries";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountriesAction = createAsyncThunk(
  "countries/getAll",
  getCountries
);
