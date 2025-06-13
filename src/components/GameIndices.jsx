import React from "react";

export const GameIndices = ({ gameIndices, setSelectedGameIndex, selected }) => {
  const handleChange = (event) => {
    setSelectedGameIndex(event.target.value);
  };

  const prepareGameVersions = () => {
    let gameVersions = new Set();
    gameIndices.forEach(item => gameVersions.add(item.version.name))
    return Array.from(gameVersions)
  }

  const gameVersions = prepareGameVersions()

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="gameIndices" className="text-xl">
        Game Version
      </label>
      <select
        className="text-xl capitalize w-[auto] px-2 py-1 bg-slate-700 rounded-md"
        onChange={(e) => handleChange(e)}
        value={selected}
        name="gameIndices"
        id="gameIndices"
      >
        {gameVersions?.map((gameIndex, index) => (
          <option key={index} value={gameIndex}>
            {gameIndex.split("-").join(" ")}
          </option>
        ))}
      </select>
    </div>
  );
};
