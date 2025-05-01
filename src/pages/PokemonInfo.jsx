import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/PokemonInfo.css";
import { usePokemonInfo } from "../hooks/usePokemonInfo.js";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies.js";
import Loader from "../components/Loader.jsx";
import GameIndices from "../components/GameIndices.jsx";
import { BasicPokemonInfo } from "../components/BasicPokemonInfo.jsx";

export const PokemonInfo = () => {
  const { id, name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(name);
  const { pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(
    pokemon?.species.url
  );
  const [selectedGameIndex, setSelectedGameIndex] = useState();

  useEffect(() => {
    document.title = `${name}`;
  }, [name, id]);

  useEffect(() => {
    if (pokemon && pokemonSpecies) {
      setSelectedGameIndex(pokemon.game_indices[0]?.version.name || pokemonSpecies.flavor_text_entries[0]?.version.name)
    }
  }, [pokemon, pokemonSpecies, id, name])

  if (loading || loadingSpecies)
    return (
      <div className=" flex justify-center items-center h-screen w-screen">
        <Loader />
      </div>
    );

  if (error || errorSpecies)
    return (
      <div>
        <p>Error Fetching the pokemon data</p>
      </div>
    );

  return (
    <>
      <header className="p-3 px-10 bg-slate-950 flex justify-between">
        <div className="text-[2rem]">
          <h1>
            PokeDex
          </h1>
        </div>
        <div>
          <GameIndices
            gameIndices={[
              ...(pokemon.game_indices || []),
              ...(pokemonSpecies.flavor_text_entries || []),
            ]}
            selected={selectedGameIndex}
            setSelectedGameIndex={setSelectedGameIndex}
          />
        </div>
      </header>
      <main className="p-8">
        <BasicPokemonInfo
          data={{ pokemon: pokemon, pokemonSpecies: pokemonSpecies }}
          gameVersion={selectedGameIndex}
        />
      </main>
    </>
  );
};
