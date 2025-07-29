import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PokemonInfo } from "./pages/PokemonInfo";
import { PokemonTypePage } from "./pages/PokemonTypePage";
import { Layout } from "./Layout";
import { Error } from "./components/Error";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
        <Route path="/type/:name" element={<PokemonTypePage />} />
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  );
}

export default App;
