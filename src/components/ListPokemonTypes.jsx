import { PokemonType } from "./PokemonType";

export const ListPokemonTypes = ({types}) => {
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
