import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PokemonInfo } from "./pages/PokemonInfo";
import { PokemonTypePage } from "./pages/PokemonTypePage";
import { Layout } from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
        <Route path="/type/:name" element={<PokemonTypePage />} />
      </Route>
    </Routes>
  );
}

export default App;
