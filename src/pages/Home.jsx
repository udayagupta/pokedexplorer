import { SearchBox, PokemonTypes, DisplayPokemon } from "../components";

export const Home = () => {

  return (
    <div className="">
      <header className="p-3 w-full flex flex-col justify-center items-center gap-5">
        <div className="text-center home-heading" style={{fontFamily: "Pokemon Solid"}}>
          <h1 className="">PokeDexplorer</h1>
        </div>
        <SearchBox />
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
