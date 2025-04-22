import React from "react";

const PokemonType = ({ type, with_text }) => {
  return (
    <div
      title={type}
      className={`flex gap-3 justify-center items-center bg-slate-600 cursor-pointer  ${with_text ? "rounded-md p-[4px] px-[10px]" : "rounded-[50%] max-w-max"}`}
    >
      {with_text && <p className="capitalize text-xl">{type}</p>}
      <img
        className="h-[40px] w-[40px]"
        src={`./types/${type}.png`}
        alt={type}
      />
    </div>
  );
};

export default PokemonType;
