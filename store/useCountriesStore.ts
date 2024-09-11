import {
  createCountry,
  getCountries,
  removeCountryById,
  updateCountry,
} from "@/services/countries";
import { Country } from "@/types/countries.type";
import { useEffect } from "react";
import { create } from "zustand";

type CountriesStore = {
  countries: Country[];
  loading: boolean;
  error: null | string;
  actions: {
    setCountries: (countries: Country[]) => void;
    add: (country: Country) => void;
    deleteCountry: (id: string) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    updateCountryFn: (country: Country) => void;
  };
};

export const useCountriesStore = create<CountriesStore>((set) => ({
  countries: [],
  loading: false,
  error: null,
  actions: {
    setCountries: (countries) => {
      set({ countries });
    },
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    add: (country) =>
      set((state) => ({ countries: [...state.countries, country] })),
    deleteCountry: (id) =>
      set((state) => ({
        countries: state.countries.filter((country) => country._id !== id),
      })),
    updateCountryFn: (country) =>
      set((state) => ({
        countries: state.countries.map((c) =>
          c._id === country._id ? country : c
        ),
      })),
  },
}));

const useCountries = () => {
  const {
    countries,
    loading,
    error,
    actions: {
      setCountries,
      add,
      deleteCountry,
      setLoading,
      setError,
      updateCountryFn,
    },
  } = useCountriesStore();

  const getData = async () => {
    setLoading(true);
    try {
      const countries = await getCountries();
      setCountries(countries);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occured");
      }
    } finally {
      setLoading(false);
    }
  };

  const addCountry = async (country: Omit<Country, "_id">) => {
    try {
      const newCountry = await createCountry(country);
      add(newCountry);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occured");
      }
    }
  };

  const deleteCountryById = async (id: string) => {
    try {
      await removeCountryById(id);
      deleteCountry(id);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occured");
      }
    }
  };

  const updateCountryById = async (country: Country) => {
    try {
      await updateCountry(
        {
          name: country.name,
          population: country.population,
          region: country.region,
        },
        country._id
      );
      updateCountryFn(country);
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An error occured");
      }
    }
  };

  const getCountryById = (id: string) => {
    const country = countries.find((country) => country._id === id);
    if (country) {
      return country;
    }
    return null;
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    countries,
    loading,
    error,
    addCountry,
    deleteCountryById,
    updateCountryById,
    getCountryById,
  };
};

export default useCountries;
