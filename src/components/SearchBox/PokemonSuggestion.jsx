import { usePokemonInfo } from "../../hooks/usePokemonInfo";
import { Link } from "react-router-dom";

const PokemonSuggestion = ({ name, clearSuggestions, url }) => {
  // const { pokemon, loading, error } = usePokemonInfo(name);

  const id = url.split("/").filter(Boolean).pop();
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  // if (loading)
  //   return (
  //     <div className="text-center h-[60px] p-2">
  //       <p>Loading...</p>
  //     </div>
  //   );

  // if (error)
  //   return (
  //     <div>
  //       <p>Error</p>
  //     </div>
  //   );

  return (
    <Link onClick={clearSuggestions} to={`/pokemon/${name}`}>
      <div className="flex justify-between items-center cursor-pointer p-2 hover:bg-blue-950">
        <div className="flex justify-center items-center gap-3">
          <img
            className="h-[60px] w-[60px]"
            src={imgUrl}
            alt={name}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
            }}
          />
          <p className="capitalize">{name}</p>
        </div>
        <p className="text-2xl"># {id}</p>
      </div>
    </Link>
  );
};

export default PokemonSuggestion;
