import { Table } from "./CustomTable/Table";
import { TableRow } from "./CustomTable/TableRow";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export const FormsSection = ({ data }) => {
  const PokemonVarieties = ({ varieties, name }) => {
    return (
      <ul className="flex flex-col gap-2 text-[14px] font-semibold">
        {varieties.map((item, index) =>
          item.pokemon.name === name ? (
            <li
              key={index}
              className="capitalize opacity-50 p-1 text-center rounded-md border"
            >
              <p>{item.pokemon.name.split("-").join(" ")} {item.is_default ? "(Default)" : ""}</p>
            </li>
          ) : (
            <li key={index} className="capitalize p-1 text-center rounded-md border">
              <Link to={`/pokemon/${item.pokemon.name}`}>
                <p>{item.pokemon.name.split("-").join(" ")} {item.is_default ? "(Default)" : ""}</p>
              </Link>
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <section id="forms-section" className="w-full flex flex-col gap-2">
      <Heading title={"Forms"} />
      <Table>
        <TableRow
          title={"Alternative Forms"}
          value={data.pokemonSpecies.forms_switchable ? "Yes" : "None"}
        />
        <TableRow
          title={"Gender Differences"}
          value={data.pokemonSpecies.has_gender_differences ? "Yes" : "No"}
        />
        <TableRow
          title={"Varieties"}
          value={
            <PokemonVarieties
              name={data.name}
              varieties={data.pokemonSpecies.varieties}
            />
          }
        />
      </Table>
    </section>
  );
};
