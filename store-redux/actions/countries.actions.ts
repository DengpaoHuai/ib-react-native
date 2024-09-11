import { Country } from "@/types/countries.type";

export const SET_ALL = "SET_ALL";
export const ADD = "ADD";

export const setAll = (countries: Country[]) => {
  return {
    type: SET_ALL,
    payload: countries,
  };
};

export const add = (country: Country) => {
  return {
    type: ADD,
    payload: country,
  };
};
