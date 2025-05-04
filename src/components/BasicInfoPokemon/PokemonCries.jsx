import React from "react";
import { PiSpeakerHigh } from "react-icons/pi";

const PokemonCries = ({ cries }) => {
  if (!cries) return null;

  return (
    <ul className="flex gap-3">
      {Object.keys(cries).map((key, index) => (
        <li
          key={index}
          className="capitalize rounded-[100vw] bg-slate-900 flex gap-4 hover:bg-slate-800 p-[5px] px-3 cursor-pointer items-center justify-center"
        >
          <button
            className="flex text-sm font-semibold h-full w-full cursor-pointer items-center gap-2 justify-center"
            onClick={() => new Audio(cries[key]).play()}
          >
            <PiSpeakerHigh />
            <span className="capitalize">{key} cry</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonCries;