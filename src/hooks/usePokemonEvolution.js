import axios from "axios";
import { useState, useEffect } from "react";
import { cleanEvolutionData } from "../utils/evolution";

export const usePokemonEvolution = (url) => {
  const [evolutionData, setEvolutionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log(url)
      const cleanData = cleanEvolutionData(response.data.chain);
      console.log(cleanData)
      setEvolutionData(cleanData);
      //   return cleanData;
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchEvoData();
  }, [url]);

  return { evolutionData, loading, error };
};
