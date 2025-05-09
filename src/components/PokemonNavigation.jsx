import React, { useEffect, useState } from "react";
import { usePokemonInfo } from "../hooks/usePokemonInfo";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PokemonNavigation = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [max, setMax] = useState(null);
  const [error, setError] = useState(null);

  const next = usePokemonInfo(id < max ? id + 1 : null);
  const previous = usePokemonInfo(id > 1 ? id - 1 : null);

  useEffect(() => {
    const fetchMaxId = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"
        );
        const maxId = response.data.results.length;
        setMax(maxId);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaxId();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erro</p>;

  return (
    <section className="flex justify-center items-center gap-2">
      {id > 1 && (
        <Link to={`/pokemon/${previous.pokemon?.name}`}>
          <motion.div
            initial={{ translateX: 0 }}
            whileHover={{ translateX: -5, cursor: "pointer" }}
            className="bg-slate-950 flex max-w-max gap-5 pl-2 rounded-l-lg overflow-hidden"
          >
            <div>
              <img
                className="h-[100px] w-[100px]"
                src={
                  previous.pokemon?.sprites?.other["official-artwork"][
                    "front_default"
                  ]
                }
                alt={previous.pokemon?.name}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">#{previous.pokemon?.id}</p>
              <p className="text-lg capitalize">
                {previous.pokemon?.name.split("-").join(" ")}
              </p>
            </div>
            <div className="flex flex-col justify-evenly items-center p-1 bg-orange-600 font-bold text-slate-950">
              <span>P</span>
              <span>R</span>
              <span>E</span>
              <span>V</span>
            </div>
          </motion.div>
        </Link>
      )}
      {id < max && (
        <Link to={`/pokemon/${next.pokemon?.name}`}>
          <motion.div
            initial={{ translateX: 0 }}
            whileHover={{ translateX: 5, cursor: "pointer" }}
            className="bg-slate-950 flex max-w-max gap-5 pr-2 rounded-r-lg"
          >
            <div className="flex flex-col justify-evenly items-center p-1 bg-orange-600 font-bold text-slate-950">
              <span>N</span>
              <span>E</span>
              <span>X</span>
              <span>T</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">#{next.pokemon?.id}</p>
              <p className="text-lg capitalize">
                {next.pokemon?.name.split("-").join(" ")}
              </p>
            </div>
            <div>
              <img
                className="h-[100px] w-[100px]"
                src={
                  next.pokemon?.sprites?.other["official-artwork"][
                    "front_default"
                  ]
                }
                alt={next.pokemon?.name}
              />
            </div>
          </motion.div>
        </Link>
      )}
    </section>
  );
};

export default PokemonNavigation;
