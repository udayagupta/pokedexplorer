import axios from "axios";
import React, { useEffect, useState } from "react";

export const usePokemonSpecies = (url) => {
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [loadingSpecies, setLoadingSpecies] = useState(true);
  const [errorSpecies, setErrorSpecies] = useState(false);

  const fetchPokemonSpecies = async () => {
    try {
      const response = await axios.get(
        url
      );
      setPokemonSpecies(response.data);
    } catch (error) {
      setErrorSpecies(error);
    } finally {
      setLoadingSpecies(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchPokemonSpecies();
  }, [url]);

  return { pokemonSpecies, loadingSpecies, errorSpecies };
};
