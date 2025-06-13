import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonCard";
import { Loader } from "../Loader";

export const DisplayPokemon = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=${offset}`
      );
      setCurrentPokemon((prevData) => [...prevData, ...response.data.results]);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setOffset((prevData) => prevData + limit);

    setTimeout(() => {
      window.scrollBy({
        behavior: "smooth",
        top: 300,
      })
    }, 500)    
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);


  if (error) return (
    <div className="text-center text-3xl">
      Something went wrong in fetching Pokemons! 😓
    </div>
  )

  if (loading) return (
    <div className="flex justify-center">
      <Loader size={"50px"}/>
    </div>
  )

  return (
    <section className="my-5 flex justify-center flex-col px-9">
      <ul className="pokemon-list flex justify-center gap-8 flex-wrap">
        {loading ? (
          <Loader />
        ) : (
          currentPokemon?.map((item, index) => (
            <li
              key={index}
            >
              <PokemonCard name={item.name} />
            </li>
          ))
        )}
      </ul>
      {!loading && (
        <button
          className="mx-auto mt-5 cursor-pointer bg-slate-500 p-1 text-lg rounded-md"
          onClick={() => loadMore()}
        >
          Load More
        </button>
      )}
    </section>
  );
};
