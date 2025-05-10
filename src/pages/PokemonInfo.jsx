import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/PokemonInfo.css";
import { usePokemonInfo } from "../hooks/usePokemonInfo.js";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies.js";
import Loader from "../components/Loader.jsx";
import GameIndices from "../components/GameIndices.jsx";
import { BasicPokemonInfo } from "../components/BasicInfoPokemon/BasicPokemonInfo.jsx";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import BreedingSection from "../components/BreedingSection.jsx";
import TrainingSection from "../components/TrainingSection.jsx";
import PokemonNavigation from "../components/PokemonNavigation.jsx";
import { usePokemonEvolution } from "../hooks/usePokemonEvolution.js";
import PokemonEvolution from "../components/PokemonEvolution/PokemonEvolution.jsx";

export const PokemonInfo = () => {
  const { name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(name);
  const { pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(
    pokemon?.species.url
  );
  // const evolution = usePokemonEvolution(pokemonSpecies?.evolution_chain.url)
  const [selectedGameIndex, setSelectedGameIndex] = useState();

  useEffect(() => {
    document.title = `${pokemonSpecies?.names?.find(item => item.language.name === "en").name} | Pokemon`;
  }, [name, pokemonSpecies]);

  useEffect(() => {
    if (pokemon && pokemonSpecies) {
      setSelectedGameIndex(
        pokemon.game_indices[0]?.version.name ||
          pokemonSpecies.flavor_text_entries[0]?.version.name
      );
    }
  }, [pokemon, pokemonSpecies, name]);

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
      <header className="p-3 px-10 bg-slate-950 flex items-center justify-between">
        <div className="text-[2.3rem]">
          <h1 style={{ fontFamily: "Pokemon Solid" }}>PokeDex</h1>
        </div>
        <div>
          <SearchBox />
        </div>
      </header>
      <main className="p-8" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div style={{ fontFamily: "Jockey One" }}>
          <GameIndices
            gameIndices={[
              ...(pokemon.game_indices || []),
              ...(pokemonSpecies.flavor_text_entries || []),
            ]}
            selected={selectedGameIndex}
            setSelectedGameIndex={setSelectedGameIndex}
          />
        </div>
        <BasicPokemonInfo
          data={{ pokemon: pokemon, pokemonSpecies: pokemonSpecies }}
          gameVersion={selectedGameIndex}
        />
        <div className="flex">
          <BreedingSection
            data={{ pokemon: pokemon, pokemonSpecies: pokemonSpecies }}
          />
          <TrainingSection
            data={{ pokemon: pokemon, pokemonSpecies: pokemonSpecies, gameVersion: selectedGameIndex }}
          />
        </div>
        <PokemonEvolution url={pokemonSpecies.evolution_chain.url}/>
        <PokemonNavigation id={pokemon.id}/>
      </main>
    </>
  );
};
