import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonInfo = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemon(response.data);
    
    } catch (error) {
        setError(true);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    if (!name) return;
    fetchPokemon()
  }, [name]);


  return { pokemon, loading, error };
};
