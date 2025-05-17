import { useEffect, useState } from "react";
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
import PokemonEvolution from "../components/PokemonEvolution/PokemonEvolution.jsx";
import FormsSection from "../components/FormsSection.jsx";
import LocationSection from "../components/LocationSection/LocationSection.jsx";

export const PokemonInfo = () => {
  const { name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(name);
  const { pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(
    pokemon?.species.url
  );
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
        <Loader size={"50px"}/>
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
      <main className="flex flex-col gap-5" style={{ fontFamily: "Poppins, sans-serif" }}>
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
          data={{ pokemon, pokemonSpecies }}
          gameVersion={selectedGameIndex}
        />
        <div className="flex info-sections gap-4">
          <BreedingSection
            data={{ pokemon, pokemonSpecies }}
          />
          <TrainingSection
            data={{ pokemon, pokemonSpecies, gameVersion: selectedGameIndex }}
          />
          <FormsSection  data={{ pokemonSpecies, name: pokemon.name }}/>
        </div>
        <PokemonEvolution url={pokemonSpecies.evolution_chain.url}/>
        <LocationSection url={pokemon.location_area_encounters} gameVersion={selectedGameIndex}/>
        <PokemonNavigation id={pokemon.id}/>
            
      </main>
    </>
  );
};
