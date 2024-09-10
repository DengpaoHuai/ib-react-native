import { Country } from "@/types/countries.type";

export const createCountry = async (country: Country) => {
  const response = await fetch(
    "https://crudcrud.com/api/726b4e8544b94b61a6235891cfb91fe3/countries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country),
    }
  );

  return await response.json();
};
