import React from "react";
import { motion } from "framer-motion";
import { imageAnimation, sectionAnimation } from "../../utils/animation";
import BasicInfoTable from "./BasicInfoTable";

const PokemonDescription = ({ data, gameVersion }) => {
  const flavorText =
    data.pokemonSpecies.flavor_text_entries
      ?.find(
        (item) =>
          item.language.name === "en" && item.version.name === gameVersion
      )
      ?.flavor_text.replace(/\\[nf]/g, " ")
      .trim() || null;

  const effectEntry =
    data.pokemonSpecies.effect_entries
      ?.find(
        (item) =>
          item.language.name === "en" && item.version.name === gameVersion
      )
      ?.effect.replace(/\\[nf]/g, " ")
      .trim() || null;

  return (
    <div className="text-left mb-3">
      <div className="flex items-center gap-5">
        <h3 className="text-5xl capitalize">{data.pokemon.name}</h3>
        <div className="flex gap-5 my-2">
          {data.pokemonSpecies.is_mythical && (
            <p className="bg-purple-600 text-sm max-h-max p-1 px-2 rounded-md">Mythical</p>
          )}
          {data.pokemonSpecies.is_legendary && (
            <p className="bg-orange-600 text-sm max-h-max p-1 px-2 rounded-md">Legendary</p>
          )}
        </div>
      </div>
      <p className="text-xl my-3 ">
        {flavorText || effectEntry || "Description for this version not found!"}
      </p>
    </div>
  );
};

export const BasicPokemonInfo = ({ data, gameVersion }) => {
  return (
    <div
      className="flex gap-5 justify-evenly"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <motion.section
        initial={sectionAnimation.fromBotton.initial}
        animate={sectionAnimation.fromBotton.animate}
        transition={{
          duration: 0.4,
        }}
        className="flex-1 flex flex-col rounded-md bg-slate-950d px-5 p-5"
      >
        <PokemonDescription data={data} gameVersion={gameVersion} />
        <BasicInfoTable data={data} gameVersion={gameVersion}/>
      </motion.section>
      <motion.section
        initial={sectionAnimation.fromTop.initial}
        animate={sectionAnimation.fromTop.animate}
        transition={{
          duration: 1,
        }}
        className="basic-pokemon-info bg-slate-950d flex-1 flex justify-center flex-col items-center  rounded-md"
      >
        <div>
          <motion.img
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}
            transition={{
              delay: 0.4,
            }}
            loading="lazy"
            src={
              data.pokemon.sprites.other["official-artwork"]["front_default"]
            }
            alt={data.pokemon.name}
          />
        </div>
      </motion.section>
    </div>
  );
};
