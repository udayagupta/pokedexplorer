import React, { useEffect } from "react";
import { usePokemonInfo } from "../../hooks/usePokemonInfo";

const PokemonSuggestion = ({ name }) => {
  const { pokemon, loading, error } = usePokemonInfo(name);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Error</p>
      </div>
    );

  return (
    <div className="flex justify-between items-center cursor-pointer p-2 hover:bg-blue-950">
      <div className="flex justify-center items-center gap-3">
        <img
          className="h-[60px] w-[60px]"
          src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}
          alt={name}
        />
        <p className="capitalize">{pokemon.name}</p>
      </div>
      <p className="text-2xl"># {pokemon.id}</p>
    </div>
  );
};

export default PokemonSuggestion;
