import { Link } from "react-router-dom";
import { SearchBox } from "../components";

export const Header = () => {
  return (
    <header className="p-3 px-10 flex items-center justify-between">
      <div className="text-[2.3rem]">
        <h1 style={{ fontFamily: "Pokemon Solid" }}>
          <Link to={"/"}>PokeDexplorer</Link>
        </h1>
      </div>
      <SearchBox />
    </header>
  );
};
