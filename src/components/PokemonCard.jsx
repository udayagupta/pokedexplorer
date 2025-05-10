import React, { useEffect, useRef } from "react";
import { usePokemonInfo } from "../hooks/usePokemonInfo";
import PokemonType from "./PokemonType";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardAnimation, imageAnimation } from "../utils/animation";

const PokemonCard = ({ name }) => {
  const { pokemon, loading, error } = usePokemonInfo(name);

  if (loading)
    return (
      <div className="h-[300px] rounded-lg w-[180px] flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="h-[300px] rounded-lg w-[180px] bg-slate-800 flex justify-center items-center">
        <p className="text-3xl">Not Found!</p>
      </div>
    );

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={{
        duration: 0.3,
        scale: { type: "tween" },
      }}
    >
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-card bg-slate-800 h-[300px] w-[180px] p-4 flex flex-col gap-3 justify-center items-center rounded-lg">
          <div className="">
            <motion.img
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              loading="lazy"
              className="h-[110px] w-[110px]"
              src={
                pokemon["sprites"]["other"]["official-artwork"]["front_default"]
              }
              alt={pokemon.name}
            />
          </div>
          <div className="text-center  capitalize text-2xl">
            <h3>{pokemon.name.split("-").join(" ")}</h3>
          </div>
          <div className="text-3xl"># {pokemon.id}</div>
          <div className="pokemon-types  flex gap-3 justify-center">
            {pokemon.types.map((type, index) => (
              <PokemonType
                key={type.type.name}
                type={type.type.name}
                with_text={false}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PokemonCard;
