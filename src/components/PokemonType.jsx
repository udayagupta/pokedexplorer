import React from "react";

const PokemonType = ({ type, with_text }) => {
  return (
    <div
      title={type}
      className={`flex gap-3 justify-center items-center bg-slate-600 cursor-pointer  ${with_text ? "rounded-md p-[3px] px-[5px]" : "rounded-[50%] max-w-max"}`}
    >
      {with_text && <p className="capitalize sm:text-md md:text-lg lg:text-lg xl:text-xl">{type}</p>}
      <img
        className="h-[30px] w-[30px]"
        src={`./types/${type}.png`}
        alt={type}
      />
    </div>
  );
};

export default PokemonType;
