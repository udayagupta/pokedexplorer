import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonLocations = (url) => {
  const [locations, setLocations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPokemonLocations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      // console.log(response.data)
      setLocations(response.data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;

    getPokemonLocations();
  }, [url]);

  return { locations, loading, error };
};
