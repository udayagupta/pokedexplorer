import axios from "axios";
import { useEffect, useState } from "react";
import PokemonSuggestion from "./PokemonSuggestion";
import { useMemo } from "react";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species?limit=2000&offset=0"
        );
        setData(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300)

    return () => clearTimeout(timer);
  }, [value])

  const suggestions = useMemo(() => {
    if (!debouncedValue) return [];

    const loweredSearch = debouncedValue.toLowerCase()
    let results = [];

    for (const item of data) {
      if (item.name.toLowerCase().includes(loweredSearch)) {
        results.push(item);

        if (results.length >= 5) break;
      }
    }
    
    return results;

  }, [debouncedValue, data]);


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
          <li className="text-xl bg-slate-950" key={item.name}>
            <PokemonSuggestion url={item.url} name={item.name} clearSuggestions={() =>{setValue("");}}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
