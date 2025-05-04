import React from "react";
import PokemonType from "../PokemonType";
import { TableRow } from "../CustomTable/TableRow";
import { Table } from "../CustomTable/Table";
import PokemonCries from "./PokemonCries";
import { AbilitiesSection } from "../AbilitiesSection";

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

const BasicInfoTable = ({ data, gameVersion }) => {
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
      <TableRow
        title={"Abilities"}
        value={<AbilitiesSection data={data.pokemon.abilities} gameVersion={gameVersion}/>}
      />
      {data.pokemon.cries && (
        <TableRow title={"Cries"} value={<PokemonCries cries={data.pokemon.cries} />} />
      )}
    </Table>
  );
};

export default BasicInfoTable;
