import { getCountries, removeCountryById } from "@/services/countries";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountriesAction = createAsyncThunk(
  "countries/getAll",
  getCountries
);

export const deleteCountryAction = createAsyncThunk(
  "countries/delete",
  async (id: string) => {
    return removeCountryById(id);
  }
);
