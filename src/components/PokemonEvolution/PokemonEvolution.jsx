import {PokemonCard} from "./../PokemonCard";
import { FaArrowDown } from "react-icons/fa6";
import {Loader} from "../Loader";
import { usePokemonEvolution } from "../../hooks/usePokemonEvolution";

const TriggerText = ({ triggerText }) => {
  return (
    <p className="text-[15px]" style={{ fontFamily: "Poppins" }}>
      {triggerText}
    </p>
  );
};

const EvolutionList = ({ list }) => {
  return (
    <ul className="flex gap-4 overflow-x-auto justify-center items-center">
      {list.length > 0 &&
        list.map((item, index) => (
          <li
            key={index}
            className="flex flex-col text-lg capitalize text-center p-3 items-center"
          >
            <TriggerText triggerText={item.triggerText} />
            <FaArrowDown className="text-2xl mx-auto my-2" />
            <PokemonCard name={item.name} />
          </li>
        ))}
    </ul>
  );
};

export const PokemonEvolution = ({ url }) => {
  const { evolutionData, loading, error } = usePokemonEvolution(url);

  if (loading)
    return (
      <div className="w-full h-[500px] flex justify-center items-center p-5">
        <Loader size={"50px"} />
      </div>
    );
  if (error)
    return (
      <div className="text-lg flex flex-col justify-center items-center">
        <div className="text-center text-3xl bg-slate-8000 p-1 rounded-md font-semibold">
          <h3>Pokemon Evolution</h3>
        </div>
        <p>Error ⚠️</p>
      </div>
    );

  return (
    <section id="evolution-section" className="flex flex-col gap-3">
      <div className="text-center text-3xl bg-slate-8000 p-1 rounded-md font-semibold">
        <h3>Pokemon Evolution</h3>
      </div>
      <div
        style={{ fontFamily: "Jockey One" }}
        className="chain flex overflow-x-auto p-3 rounded-md flex-col justify-center items-center mb-3"
      >
        <PokemonCard name={evolutionData.firstStage} />
        <EvolutionList list={evolutionData.secondStage} />
        <EvolutionList list={evolutionData.thirdStage} />
      </div>
    </section>
  );
};
