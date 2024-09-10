import { getPlanets } from "@/services/planets";
import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);

  const refetch = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    getPlanets(url)
      .then((response: T) => {
        setData(response);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refresh]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
