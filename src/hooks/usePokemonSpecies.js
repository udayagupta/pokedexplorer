import axios from "axios";
import React, { useEffect, useState } from "react";

export const usePokemonSpecies = (name) => {
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [loadingSpecies, setLoadingSpecies] = useState(true);
  const [errorSpecies, setErrorSpecies] = useState(false);

  const fetchPokemonSpecies = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      setPokemonSpecies(response.data);
    } catch (error) {
      setErrorSpecies(error);
    } finally {
      setLoadingSpecies(false);
    }
  };

  useEffect(() => {
    // if (!name) console.log("Name undefined");
    console.log(name);
    fetchPokemonSpecies();
  }, [name]);

  return { pokemonSpecies, loadingSpecies, errorSpecies };
};
