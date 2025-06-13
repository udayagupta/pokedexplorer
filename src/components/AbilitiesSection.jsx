import { usePokemonAbilities } from "../hooks/usePokemonAbilities";
import {Loader} from "./Loader"

export const AbilitiesSection = ({ data }) => {
  const { abilitiesData, abilitiesLoading, error } = usePokemonAbilities(data)


  if (abilitiesLoading) return (<div className="flex justify-center"><Loader size="30px" /></div>)
  if (error) return (<p className="text-sm">Error finding the data</p>)

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
