import { Link } from "react-router-dom";

export const PokemonType = ({
  type,
  with_text,
  size = "30px",
  disableLink = false,
}) => {
  const content = (
    <div
      className={`flex gap-3 justify-center items-center bg-slate-800 cursor-pointer ${with_text ? "rounded-md p-[3px] px-[5px]" : "rounded-[50%] max-w-max"}`}
      style={{ fontFamily: "Jockey One" }}
      title={type}
    >
      {with_text && <p className="capitalize text-lg">{type}</p>}
      <img
        style={{ height: size, width: size }}
        src={`/types/${type}.png`}
        alt={type}
      />
    </div>
  );

  return disableLink ? content : <Link to={`/type/${type}`}>{content}</Link>;
};
