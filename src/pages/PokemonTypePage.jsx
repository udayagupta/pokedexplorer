import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { usePokemonType } from "../hooks/usePokemonType";
import "../styles/PokemonTypePage.css";
import {
  Loader,
  SectionTable,
  PokemonType,
} from "../components";

export const PokemonTypePage = () => {
  const pokemonTypes = {
    normal: 1,
    fighting: 2,
    flying: 3,
    poison: 4,
    ground: 5,
    rock: 6,
    bug: 7,
    ghost: 8,
    steel: 9,
    fire: 10,
    water: 11,
    grass: 12,
    electric: 13,
    psychic: 14,
    ice: 15,
    dragon: 16,
    dark: 17,
    fairy: 18,
    stellar: 19,
    unknown: 10001,
    shadow: 10002,
  };

  const { name } = useParams();
  const { typeInfo, loading, error } = usePokemonType(pokemonTypes[name]);

  const typeNameEng = useMemo(() => {
    return (
      typeInfo?.names?.find((name) => name.language.name === "en").name || name
    );
  }, [typeInfo, name]);

  document.title = `${typeNameEng || name} | Pokemon Type`;

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader size={"50px"} />
      </div>
    );

  if (error)
    return (
      <div
        style={{ fontFamily: "Poppins" }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <p className="text-3xl font-semibold">Error fetching type info</p>
      </div>
    );

  const generation = typeInfo?.generation?.name.split("-").join(" ");

  const typeDetails = [
    { key: "Type ID", value: typeInfo.id },
    { key: "Generation", value: generation },
    { key: "Move Damage Class", value: typeInfo.move_damage_class?.name || "None" },
    { key: "Total Pokemons", value: typeInfo.pokemon?.length || 0 },
    { key: "Total Moves", value: typeInfo.moves?.length || 0 },
  ];

  const labelMap = {
    double_damage_from: "Double Damage From",
    double_damage_to: "Double Damage To",
    half_damage_from: "Half Damage From",
    half_damage_to: "Half Damage To",
    no_damage_from: "No Damage From",
    no_damage_to: "No Damage To",
  };

  const damageRelations = Object.entries(typeInfo.damage_relations)
    .filter(([key]) => labelMap[key])
    .map(([key, types]) => ({
      key: labelMap[key],
      value:
        types.length > 0 ? (
          <div className="flex gap-2 flex-wrap">
            {types.map((type, index) => (
              <PokemonType
                type={type.name}
                with_text={false}
                size="30px"
                key={index}
              />
            ))}
          </div>
        ) : (
          "None"
        ),
    }));

  return (
    <>
        <div className="flex gap-5 items-center pokemon-type">
          <h2 className="text-4xl font-semibold">{typeNameEng} Type</h2>
          <PokemonType type={name} size="50px" disableLink={false}/>
        </div>
        <div className="flex gap-5 pokemon-type-page">
          <SectionTable
            sectionClassName={"flex-1 capitalize"}
            heading={"Basic Info"}
            data={typeDetails}
          />
          <SectionTable
            sectionClassName={"flex-1"}
            heading={"Damage Relations"}
            data={damageRelations}
          />
        </div>
    </>
  );
};
