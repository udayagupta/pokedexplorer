import React, { useEffect } from "react";
import { Table } from "./CustomTable/Table";
import { TableRow } from "./CustomTable/TableRow";

const TrainingSection = ({ data }) => {
  const heldItems = (items) => {
    const filteredItems = items.filter((item) =>
      item.version_details.find(
        (item) => item.version.name === data.gameVersion
      )
    );
    return filteredItems.length > 0 ? filteredItems : null;
  };

  const GetHeldItems = ({ items }) => {
    const filteredItems = heldItems(items);
    return filteredItems ? (
      <ul className="flex flex-col gap-2">
        {filteredItems.map((item, index) => (
          <li
            className="border flex  gap-2 justify-center items-center flex-1 font-semibold text-md p-1 px-4 rounded-md capitalize text-center"
            key={index}
          >
            <p className="flex flex-col">
              <span>{item.item.name.split("-").join(" ")}</span>
              <span className="font-light text-sm">
                ({
                  item.version_details.find(
                    (version) => version.version.name === data.gameVersion
                  ).rarity
                }% Chance)
              </span>
            </p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`}
              alt={item.item.name}
            />
          </li>
        ))}
      </ul>
    ) : (
      <p>None</p>
    );
  };

  const GetEVYield = ({ stats }) => {
    const filteredStats =
      stats.filter((item) => {
        if (item.effort) {
          return item;
        }
      }) || null;

    return filteredStats ? (
      <ul className="flex flex-col gap-2">
        {filteredStats.map((item, index) => (
          <li className="capitalize" key={index}>
            {item.effort} {item.stat.name.split("-").join(" ")}
          </li>
        ))}
      </ul>
    ) : (
      <p>None</p>
    );
  };

  return (
    <section className="w-full flex flex-col gap-2 info-section rounded-md">
      <div className="font-semibold section-heading bg-slate-800 text-lg p-1 rounded-md text-center">
        <h3>Training</h3>
      </div>
      <Table>
        <TableRow
          title={"Base Experience"}
          value={data.pokemon.base_experience}
        />
        <TableRow
          title={"EV Yield"}
          value={<GetEVYield stats={data.pokemon.stats} />}
        />
        <TableRow
          title={"Catch Rate"}
          value={`${data.pokemonSpecies.capture_rate}`}
        />
        <TableRow
          title={"Base Happiness"}
          value={`${data.pokemonSpecies.base_happiness}`}
        />
        <TableRow
          title={"Held Items"}
          value={<GetHeldItems items={data.pokemon.held_items} />}
        />
      </Table>
    </section>
  );
};

export default TrainingSection;
