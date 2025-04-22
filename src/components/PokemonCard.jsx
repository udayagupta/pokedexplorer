import React, { useState, useEffect } from "react";
import { usePokemonInfo } from "../hooks/usePokemonInfo";
import PokemonType from "./PokemonType";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies";

const PokemonCard = ({ name }) => {
  const { pokemon, loading, error } = usePokemonInfo(name);
  const {pokemonSpecies, loadingSpecies, errorSpecies } = usePokemonSpecies(name);
  // const [pokeDex, setPokeDex] = useState(null)

  useEffect(() => {
    // if (!loadingSpecies) {
    //   let newPokeDex = pokemonSpecies.pokedex_numbers.find(item => (
    //     item.pokedex.name === "national"
    //   ))
    //   setPokeDex(newPokeDex);
    // }

    // console.log(pokeDex)
  }, [pokemonSpecies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: 404</p>;

  return (

      <div className="pokemon-card bg-slate-800 p-8 flex flex-col gap-5 justify-center items-center rounded-lg">
        <div>
          <img className="h-[100px] w-[100px]" src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} alt={pokemon.name} />
        </div>
        <div className="text-center capitalize text-2xl">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="text-3xl">
          # {pokemon.id}
        </div>
        {/* <div className="pokemon-types flex gap-3 justify-center">
          {
            pokemon.types.map((type, index) => (
                <PokemonType key={type.type.name} type={type.type.name} with_text={false}/>
            ))
          }
        </div> */}
      </div>
  );
};

export default PokemonCard;
