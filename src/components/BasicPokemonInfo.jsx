import React from "react";
import { motion } from "framer-motion";
import { imageAnimation, sectionAnimation } from "../utils/animation";
import PokemonType from "./PokemonType";

const InfoTableRow = ({ title, value, ...props }) => {
  return (
    <tr className={`border-b border-slate-700 ${props.className}`}>
      <th className="text-left px-4 py-2 bg-slate-800 text-slate-200 font-semibold w-1/2">
        {title}
      </th>
      <td className="px-4 py-2 bg-slate-950 text-slate-100">{value}</td>
    </tr>
  );
};

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
      <h3 className="pokemon-name">{data.pokemon.name}</h3>
      <p className="text-xl my-3">
        {flavorText || effectEntry || "Description for this version not found!"}
      </p>
    </div>
  );
};

const PokemonTypes = ({ types }) => {
  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {types.map((type, index) => (
          <li key={index}>
            <PokemonType type={type.type.name} with_text={false} />
          </li>
        ))}
      </ul>
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
        className="flex-1 flex flex-col rounded-md bg-slate-950 px-5 p-5"
      >
        <PokemonDescription data={data} gameVersion={gameVersion} />
        <table className="table-auto w-full border border-slate-700 rounded-lg overflow-hidden">
          <tbody>
            <InfoTableRow
              title={"Pokedex Number"}
              value={
                data.pokemonSpecies.pokedex_numbers.find(
                  (item) => item.pokedex.name === "national"
                ).entry_number
              }
            />
            <InfoTableRow
              title={"Height"}
              value={`${(data.pokemon.height / 10).toFixed(1)} m`}
            />
            <InfoTableRow
              title={"Weight"}
              value={`${(data.pokemon.weight / 10).toFixed(1)} kg`}
            />
            <InfoTableRow
              title={"Category"}
              value={data.pokemonSpecies.genera.find(item => item.language.name === "en").genus}
            />
            <InfoTableRow
              title={"Base Experience"}
              value={data.pokemon.base_experience}
            />
            <InfoTableRow
              title={"Color"}
              value={data.pokemonSpecies.color.name}
              className={"capitalize"}
            />
            <InfoTableRow
              title={"Types"}
              value={<PokemonTypes types={data.pokemon.types} />}
            />
          </tbody>
        </table>
      </motion.section>
      <motion.section
        initial={sectionAnimation.fromTop.initial}
        animate={sectionAnimation.fromTop.animate}
        transition={{
          duration: 1,
        }}
        className="basic-pokemon-info bg-slate-950 flex-1 flex justify-center flex-col items-center  rounded-md"
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
        <div className="flex gap-5 my-2">
          {data.pokemonSpecies.is_mythical && (
            <p className="bg-purple-600 p-1 px-2 rounded-md">Mythical</p>
          )}
          {data.pokemonSpecies.is_legendary && (
            <p className="bg-orange-600 p-1 px-2 rounded-md">Legendary</p>
          )}
        </div>
      </motion.section>
    </div>
  );
};
