import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";

const DisplayPokemon = () => {
  //   const [limit, setLimit] = useState(20);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      // setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=${offset}`
      );
      setCurrentPokemon(prevData => [...prevData, ...response.data.results]);
      
    } catch (error) {
      setError(error)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setOffset(prevData => prevData+limit);
  }

  useEffect(() => {
    fetchPokemon();
  }, [offset]);
  
  return (
    <section className="my-5">
      <ul className="pokemon-list grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentPokemon?.map((item, index) => (
            <li key={index}>
              <PokemonCard name={item.name} />
            </li>
          ))
        )}
      </ul>
      {!loading && <button className="mx-auto cursor-pointerm bg-red-500 p-1 text-lg rounded-md" onClick={() => loadMore()}>Load More</button>}
    </section>
  );
};

export default DisplayPokemon;
