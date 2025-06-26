import axios from "axios";
import { useEffect, useState } from "react";
import PokemonSuggestion from "./PokemonSuggestion";
import { useMemo } from "react";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"
        );
        setData(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  const suggestions = useMemo(() => {
    if (!value) return [];

    return data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    .slice(0, 5);
  }, [value, data]);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{fontFamily: "Jockey One"}} className="relative">
      <input
        placeholder="Search Pokemon"
        className="bg-slate-800 w-[320px] h-[60px] rounded-md text-xl"
        id="search-pokemon"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        spellCheck={false}
        autoComplete={"off"}
      />
      <ul className="absolute w-full rounded-md mt-2 bg-slate-700 overflow-hidden z-10">
        {suggestions?.map((item, index) => (
          <li className="text-xl bg-slate-950" key={index}>
            <PokemonSuggestion name={item.name} clearSuggestions={() =>{setValue("");}}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
