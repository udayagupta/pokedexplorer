import { PiSpeakerHigh } from "react-icons/pi";

export const PokemonCries = ({ cries, className }) => {
  if (!cries) return null;

  return (
    <ul className="flex gap-3 cries">
      {Object.entries(cries)
        .filter(([_, url]) => url)
        .map(([key, url], index) => (
          <li
            key={index}
            className={`${className} capitalize rounded-[100vw] bg-slate-900 flex gap-4 hover:bg-slate-800 p-[5px] px-3 cursor-pointer items-center justify-center`}
          >
            <button
              className="flex font-semibold h-full w-full cursor-pointer items-center gap-2 justify-center"
              onClick={() => new Audio(url).play()}
            >
              <PiSpeakerHigh />
              <span className="text-sm capitalize">{key} cry</span>
            </button>
          </li>
        ))}
    </ul>
  );
};
