import React, { useEffect } from "react";
import SearchBox from "../components/SearchBox";
import PokemonTypes from "../components/PokemonTypes/PokemonTypes";
import DisplayPokemon from "../components/DisplayPokemon/DisplayPokemon";


export const Home = () => {

  return (
    <div className="">
      <header className="p-3 w-full flex flex-col justify-center items-center gap-5">
        <div className="text-center">
          <h1 className="text-[4.5rem]">PokeDex</h1>
        </div>
        <div className="">
          <SearchBox />
        </div>
        <div className="pokemon-types">
          <PokemonTypes />
        </div>
      </header>
      <main>
        <DisplayPokemon />
      </main>
    </div>
  );
};
