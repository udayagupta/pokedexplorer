import React from "react";

const SearchBox = () => {
  return (
    <>
      <input
        placeholder="Search"
        className="bg-slate-800 w-[320px] h-[60px] rounded-md text-xl"
        id="search-pokemon"
        type="text"
      />
    </>
  );
};

export default SearchBox;
