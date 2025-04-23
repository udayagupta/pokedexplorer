import React, { useState, useEffect } from "react";
import { usePokemonInfo } from "../hooks/usePokemonInfo";
import PokemonType from "./PokemonType";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies";
import Loader from "./Loader";

const PokemonCard = ({ name }) => {
  const { pokemon, loading, error } = usePokemonInfo(name);
  const {pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(name);

  if (loading) return (
    <div className="h-[300px] rounded-lg w-[180px] bg-slate-800 flex justify-center items-center">
      <Loader />
    </div>
  );
  if (error) return (
    <div className="h-[300px] rounded-lg w-[180px] bg-slate-800 flex justify-center items-center">
      <p className="text-3xl">Not Found!</p>
    </div>
  );

  return (

      <div className="pokemon-card bg-slate-800 h-[300px] w-[180px] p-4 flex flex-col gap-3 justify-center items-center rounded-lg">
        <div className="">
          <img loading="lazy" className="h-[110px] w-[110px]" src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} alt={pokemon.name} />
        </div>
        <div className="text-center  capitalize text-2xl">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="text-3xl">
          # {pokemon.id}
        </div>
        <div className="pokemon-types  flex gap-3 justify-center">
          {
            pokemon.types.map((type, index) => (
                <PokemonType key={type.type.name} type={type.type.name} with_text={false}/>
            ))
          }
        </div>
      </div>
  );
};

export default PokemonCard;
