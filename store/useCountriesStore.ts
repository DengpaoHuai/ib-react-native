import {
  createCountry,
  getCountries,
  removeCountryById,
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
  },
}));

const useCountries = () => {
  const {
    countries,
    loading,
    error,
    actions: { setCountries, add, deleteCountry, setLoading, setError },
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

  useEffect(() => {
    getData();
  }, []);

  return { countries, loading, error, addCountry, deleteCountryById };
};

export default useCountries;
