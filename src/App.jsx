import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PokemonInfo } from "./pages/PokemonInfo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id/:name" element={<PokemonInfo />} />
    </Routes>
  );
}

export default App;
