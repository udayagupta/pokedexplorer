import PokemonCard from "./../PokemonCard";
import { FaArrowDown } from "react-icons/fa6";
import Loader from "../Loader";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

const PokemonEvolution = ({ url }) => {
  const { evolutionData, loading, error } = usePokemonEvolution(url);

  if (loading)
    return (
      <div className="w-full h-[500px] flex justify-center items-center p-5">
        <Loader size={"50px"}/>
      </div>
    );
  if (error) return <p>Error</p>;
  return (
    <section className="flex flex-col gap-3">
      <div className="text-center text-3xl bg-slate-8000 p-1 rounded-md font-semibold">
        <h3>Pokemon Evolution</h3>
      </div>
      <div
        style={{ fontFamily: "Jockey One" }}
        className="chain flex overflow-x-auto  gap-3 p-3 rounded-md flex-col justify-center items-center mb-3"
      >
        <PokemonCard name={evolutionData.firstStage} />
        <ul className="flex gap-4 overflow-x-auto">
          {evolutionData.secondStage.length > 0 &&
            evolutionData.secondStage.map((item, index) => (
              <li key={index} className="text-lg capitalize text-center p-3">
                <FaArrowDown className="text-2xl mx-auto my-2" />
                <PokemonCard name={item.name} />
              </li>
            ))}
        </ul>
        <ul className="flex gap-4 overflow-x-auto">
          {evolutionData.thirdStage.length > 0 &&
            evolutionData.thirdStage.map((item, index) => (
              <li key={index} className="text-center capitalize text-lg p-3">
                <FaArrowDown className="text-2xl mx-auto my-2" />
                <PokemonCard name={item.name} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default PokemonEvolution;
