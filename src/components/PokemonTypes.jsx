import React from "react";
import PokemonType from "./PokemonType";

const PokemonTypes = () => {
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <section className="p-4">
      {/* <div className="text-center">
        <h2 className="text-[2rem]">Pokemon Types</h2>
      </div> */}
      <div className="my-3">
        <ul className="flex gap-5 flex-wrap justify-center">
          {types.map((type, index) => (
            <li key={index} className="type-hover pokemon-type-item rounded-lg">
              <PokemonType type={type} with_text={true} />
            </li>
          ))}
          {/* {
            types.map((type, index) => {})
          } */}
        </ul>
      </div>
    </section>
  );
};

export default PokemonTypes;
