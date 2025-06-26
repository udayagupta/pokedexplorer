import { usePokemonInfo } from "../hooks/usePokemonInfo";
import {PokemonType} from "./PokemonType";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardAnimation, imageAnimation } from "../utils/animation";

export const PokemonCard = ({ name }) => {
  const { pokemon, loading, error } = usePokemonInfo(name);

  if (loading || error) {
    return (
      <div className="h-[300px] w-[180px] flex items-center justify-center rounded-lg">
        {loading ? <Loader size="50px" /> : <p className="text-xl">Not Found!</p>}
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    id,
    name: rawName,
    sprites,
    types,
  } = pokemon

  const displayName = rawName.replace(/-/g, " ");
  const imageUrl = sprites?.other?.["official-artwork"]?.front_default;

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={{
        duration: 0.3,
        scale: { type: "tween" },
      }}
      style={{fontFamily: "Jockey One"}}
    >
      <Link to={`/pokemon/${rawName}`} onClick={scrollToTop}>
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
              src={imageUrl}
              alt={displayName}
            />
          </div>
          <div className="text-center  capitalize text-2xl">
            <h3>{displayName}</h3>
          </div>
          <div className="text-3xl"># {id}</div>
          <div className="pokemon-types  flex gap-3 justify-center">
            {types.map((type) => (
              <PokemonType
                key={type.type.name}
                type={type.type.name}
                with_text={false}
                disableLink={true}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
