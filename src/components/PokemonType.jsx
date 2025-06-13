export const PokemonType = ({ type, with_text, size="30px" }) => {
  return (
    <div
      title={type}
      className={`flex gap-3 justify-center items-center bg-slate-800 cursor-pointer  ${with_text ? "rounded-md p-[3px] px-[5px]" : "rounded-[50%] max-w-max"}`}
      style={{fontFamily: "Jockey One"}}
    >
      {with_text && <p className="capitalize  text-lg">{type}</p>}
      <img
        style={{height: size, width: size}}
        src={`/types/${type}.png`}
        alt={type}
      />
    </div>
  );
};
