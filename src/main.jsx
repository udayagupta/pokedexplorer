import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { PokemonInfo } from "./pages/PokemonInfo.jsx";
import { Layout } from "./Layout.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />}/>
//       <Route path="/pokemon/:id" element={<PokemonInfo />}/>
//     </Route>
//   )
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
