import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/PokemonInfo.css";
import { usePokemonInfo } from "../hooks/usePokemonInfo.js";
import Loader from "../components/Loader.jsx";
import GameIndices from "../components/GameIndices.jsx";

export const PokemonInfo = () => {
  const { id, name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(id);
  const [gameIndices, setGameIndices] = useState();
  const [selectedGameIndex, setSelectedGameIndex] = useState();

  useEffect(() => {
    document.title = `${name}`;
  });

  useEffect(() => {
    if (pokemon) {
      setGameIndices(pokemon.game_indices);
    }
  }, [pokemon]);

  if (loading)
    return (
      <div className=" flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <p>Error Fetching the pokemon data</p>
      </div>
    );

  return (
    <>
      <header></header>
      <main className="p-10">
        <div>
          <GameIndices
            gameIndices={gameIndices}
            selected={selectedGameIndex}
            setSelectedGameIndex={setSelectedGameIndex}
          />
        </div>
        <div>
          <img
            src={`${pokemon["sprites"]["other"]["official-artwork"]["front_default"]}`}
            alt={pokemon.name}
          />
        </div>
      </main>

    </>
  );
};
