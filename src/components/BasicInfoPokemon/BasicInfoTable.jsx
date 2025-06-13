import {PokemonType} from "../PokemonType";
import { TableRow } from "../CustomTable/TableRow";
import { Table } from "../CustomTable/Table";
import { PokemonCries } from "./PokemonCries";
import { AbilitiesSection } from "../AbilitiesSection";

const PokemonTypes = ({ types }) => {
  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {types.map((type, index) => (
          <li key={index}>
            <PokemonType size="40px" type={type.type.name} with_text={false} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BasicInfoTable = ({ data, nationalPokedex }) => {
  const weightKg = data.pokemon.weight / 10;
  const weightLbs = (weightKg * 2.20462).toFixed(2);

  const heightMeters = data.pokemon.height / 10;
  const heightFeetTotal = heightMeters * 3.28084;
  const heightFeet = Math.floor(heightFeetTotal);
  const heightInches = ((heightFeetTotal - heightFeet) * 12).toFixed(0);

  const category = data.pokemonSpecies.genera.find(
    (item) => item.language.name === "en"
  ).genus;

  const [prefix, suffix] = data.pokemonSpecies.generation.name.split("-");
  const generation = `${prefix} ${suffix.toUpperCase()}`;

  return (
    <Table>
      <TableRow title={"Pokedex Number"} value={`#${nationalPokedex}`} />
      <TableRow
        title={"Height"}
        value={`${heightMeters} m (${heightFeet}' ${heightInches}'')`}
      />
      <TableRow title={"Weight"} value={`${weightKg} kg (${weightLbs} lbs)`} />

      <TableRow title={"Category"} value={category} />
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
        value={generation}
      />
      <TableRow
        title={"Types"}
        value={<PokemonTypes types={data.pokemon.types} />}
      />
      <TableRow
        title={"Abilities"}
        value={<AbilitiesSection data={data.pokemon.abilities} />}
      />
      {data.pokemon.cries && (
        <TableRow
          title={"Cries"}
          value={<PokemonCries cries={data.pokemon.cries} />}
        />
      )}
    </Table>
  );
};

