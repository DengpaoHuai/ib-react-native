import { Country } from "@/types/countries.type";
import crudcrudInstance from "./instances/crudcrud";

export const createCountry = async (country: Omit<Country, "_id">) => {
  const response = await crudcrudInstance.post("/countries", country);
  return response.data as Country;
};

export const getCountries = async () => {
  console.log("hello");
  const response = await crudcrudInstance.get("/countries");
  return response.data as Country[];
};

export const removeCountryById = async (id: string) => {
  await crudcrudInstance.delete(`/countries/${id}`);
  return id;
};
