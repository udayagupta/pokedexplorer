import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonInfo = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      setPokemon(response.data);
    
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    // if (!id) return;
    console.log("Name: ", id);
    fetchPokemon()
  }, [id]);


  return { pokemon, loading, error };
};
