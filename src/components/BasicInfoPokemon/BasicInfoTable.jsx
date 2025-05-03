import React from "react";
import PokemonType from "../PokemonType";
import { TableRow } from "../CustomTable/TableRow";
import { Table } from "../CustomTable/Table";
import { PiSpeakerHigh } from "react-icons/pi";

const PokemonTypes = ({ types }) => {
  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {types.map((type, index) => (
          <li key={index}>
            <PokemonType type={type.type.name} with_text={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const BasicInfoTable = ({ data }) => {
  return (
    <Table>
      <TableRow
        title={"Pokedex Number"}
        value={
          data.pokemonSpecies.pokedex_numbers.find(
            (item) => item.pokedex.name === "national"
          ).entry_number
        }
      />
      <TableRow
        title={"Height"}
        value={`${(data.pokemon.height / 10).toFixed(1)} m`}
      />
      <TableRow
        title={"Weight"}
        value={`${(data.pokemon.weight / 10).toFixed(1)} kg`}
      />
      <TableRow
        title={"Category"}
        value={
          data.pokemonSpecies.genera.find((item) => item.language.name === "en")
            .genus
        }
      />
      <TableRow
        title={"Color"}
        value={data.pokemonSpecies.color.name}
        className={"capitalize"}
      />
      <TableRow
        className={"capitalize"}
        title={"Shape"}
        value={data.pokemonSpecies.shape.name.split("-").join(" ")}
      />
      <TableRow
        title={"Introduced"}
        className="capitalize"
        value={`${data.pokemonSpecies.generation.name.split("-")[0]} ${data.pokemonSpecies.generation.name.split("-")[1].toUpperCase()}`}
      />
      <TableRow
        title={"Types"}
        value={<PokemonTypes types={data.pokemon.types} />}
      />
      {data.pokemon.cries && (
        <TableRow
          title={"Cries"}
          value={
            <ul className="flex gap-3">
              {Object.keys(data.pokemon.cries).map((key, index) => (
                <li
                  key={index}
                  className="capitalize rounded-[100vw] bg-slate-900 flex gap-4 hover:bg-slate-800 p-[5px] px-3 cursor-pointer items-center justify-center"
                >
                  <button
                    className="flex text-sm font-semibold h-full w-full cursor-pointer items-center gap-2 justify-center "
                    onClick={() => new Audio(data.pokemon.cries[key]).play()}
                  >
                    <PiSpeakerHigh />
                    <span className="capitalize">{key} cry</span>
                  </button>
                </li>
              ))}
            </ul>
          }
        />
      )}
    </Table>
  );
};

export default BasicInfoTable;
