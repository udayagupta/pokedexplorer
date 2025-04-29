import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonSuggestion from "./PokemonSuggestion";

const SearchBox = () => {
  const [value, setValue] = useState("")
  const [data, setData] = useState([])
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0");
        setData(response.data.results)
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    const newSuggestions = data.filter((item) => (
      item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    ))
    setSuggestions(newSuggestions.slice(0, 5));
  }, [value])

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="relative">
      <input
        placeholder="Search"
        className="bg-slate-800 w-[320px] h-[60px] rounded-md text-xl"
        id="search-pokemon"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        spellCheck={false}
        autoComplete={"off"}
      />
      <ul className="absolute w-full rounded-md mt-2 bg-slate-700 overflow-hidden z-10">
        {
          suggestions?.map((item, index) => (
            <li className="text-xl bg-slate-950" key={index}>
              <PokemonSuggestion name={item.name}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default SearchBox;
