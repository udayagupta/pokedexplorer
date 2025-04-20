import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="bg-slate-950 p-3 text-[2rem]">
        <nav>
          <h1>Pokedex</h1>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is a footer</footer>
    </>
  );
};
