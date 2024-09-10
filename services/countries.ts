import { Country } from "@/types/countries.type";
import crudcrudInstance from "./instances/crudcrud";

export const createCountry = async (country: Country) => {
  const response = await crudcrudInstance.post("/countries", country);
  return response.data;
};

export const getCountries = async () => {
  console.log("hello");
  const response = await crudcrudInstance.get("/countries");
  return response.data;
};
