import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./../styles/PokemonInfo.css";
import { usePokemonInfo } from "../hooks/usePokemonInfo.js";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies.js";
import { Link } from "react-router-dom";
import {
  Loader,
  GameIndices,
  BasicPokemonInfo,
  SearchBox,
  BreedingSection,
  TrainingSection,
  FormsSection,
  PokemonEvolution,
  LocationSection,
  PokemonNavigation,
  PageNavigation,
  BackToTop,
} from "../components";

export const PokemonInfo = () => {
  const { name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(name);
  const { pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(
    pokemon?.species.url
  );
  const [selectedGameIndex, setSelectedGameIndex] = useState();

  useEffect(() => {
    document.title = `${pokemonSpecies?.names?.find((item) => item.language.name === "en").name || name} | Pokemon`;

    if (pokemon && pokemonSpecies) {
      setSelectedGameIndex(
        pokemon.game_indices[0]?.version.name ||
          pokemonSpecies.flavor_text_entries[0]?.version.name
      );
    }
  }, [pokemon, pokemonSpecies, name]);

  const gameIndices = useMemo(
    () => [
      ...(pokemon?.game_indices || []),
      ...(pokemonSpecies?.flavor_text_entries || []),
    ],
    [pokemon, pokemonSpecies]
  );

  const nationalDexNumber = useMemo(() => {
    return (
      pokemonSpecies?.pokedex_numbers?.find(
        (item) => item.pokedex.name === "national"
      )?.entry_number || null
    );
  }, [pokemonSpecies]);

  if (loading || loadingSpecies)
    return (
      <div className=" flex justify-center items-center h-screen w-screen">
        <Loader size={"50px"} />
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
      <header className="p-3 px-10 flex items-center justify-between">
        <div className="text-[2.3rem]">
          <h1 style={{ fontFamily: "Pokemon Solid" }}>
            <Link to={"/"}>PokeDexplorer</Link>
          </h1>
        </div>
        <SearchBox />
      </header>
      <main
        className="flex flex-col gap-5"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div style={{ fontFamily: "Jockey One" }}>
          <GameIndices
            gameIndices={gameIndices}
            selected={selectedGameIndex}
            setSelectedGameIndex={setSelectedGameIndex}
          />
        </div>
        <PageNavigation />
        <BasicPokemonInfo
          data={{ pokemon, pokemonSpecies }}
          gameVersion={selectedGameIndex}
          nationalDexNumber={nationalDexNumber}
        />
        <div className="flex info-sections gap-4">
          <BreedingSection data={{ pokemon, pokemonSpecies }} />
          <TrainingSection
            data={{ pokemon, pokemonSpecies, gameVersion: selectedGameIndex }}
          />
          <FormsSection data={{ pokemonSpecies, name: pokemon.name }} />
        </div>
        <PokemonEvolution url={pokemonSpecies.evolution_chain.url} />
        <LocationSection
          url={pokemon.location_area_encounters}
          gameVersion={selectedGameIndex}
        />
        <PokemonNavigation id={nationalDexNumber} />

        <PageNavigation />
      </main>
      <BackToTop />
    </>
  );
};
