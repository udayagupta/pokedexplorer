import React, { useEffect } from "react";
import { Table } from "./CustomTable/Table";
import { usePokemonAbilities } from "../hooks/usePokemonAbilities";
import Loader from "./Loader"

export const AbilitiesSection = ({ data, gameVersion }) => {
  const { abilitiesData, abilitiesLoading, error } = usePokemonAbilities(data)

  useEffect(() => {
    console.log(abilitiesData)
  }, [abilitiesLoading])

  if (abilitiesLoading) return (<div><Loader /></div>)

  return (
    <ul className="flex flex-col gap-3">
      {
        abilitiesData.map((item, index) => (
          <li key={index}>
            <p>{index+1}. {item.data.names.find(item => item.language.name === "en").name} {item.is_hidden && "(hidden)"}</p>
            <p className="font-light text-sm">
              {
                item.data.effect_entries.find(item => item.language.name === "en").short_effect
              }
            </p>
          </li>
        ))
      }
    </ul>
  );
};
