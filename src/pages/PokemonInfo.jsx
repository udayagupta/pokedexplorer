import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/PokemonInfo.css";
import { usePokemonInfo } from "../hooks/usePokemonInfo.js";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies.js";
import Loader from "../components/Loader.jsx";
import GameIndices from "../components/GameIndices.jsx";
import { motion } from "framer-motion";
import { imageAnimation } from "../utils/animation.js";

export const PokemonInfo = () => {
  const { id, name } = useParams();
  const { pokemon, loading, error } = usePokemonInfo(name);
  const {pokemonSpecies, loadingSpecies, errorSpecies} = usePokemonSpecies(pokemon?.species.url)
  const [selectedGameIndex, setSelectedGameIndex] = useState();

  useEffect(() => {
    document.title = `${name}`;
  }, [name, id]);


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
      <header>
        <div>
          <GameIndices
            gameIndices={[
              ...(pokemon.game_indices || []),
              ...(pokemonSpecies.flavor_text_entries || [])
            ]}
            selected={selectedGameIndex}
            setSelectedGameIndex={setSelectedGameIndex}
          />
        </div>
      </header>
      <main className="p-10">
        <div>
          <motion.img
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}
            transition={{
              delay: 0.4,
            }}
            loading="lazy"
            src={
              pokemon?.sprites.other["official-artwork"]["front_default"]
            }
            alt={pokemon.name}
          />
        </div>
      </main>
    </>
  );
};
