import React, { useEffect, useState } from "react";

const SearchBox = () => {
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    
  }, [value])

  return (
    <>
      <input
        placeholder="Search"
        className="bg-slate-800 w-[320px] h-[60px] rounded-md text-xl"
        id="search-pokemon"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default SearchBox;
