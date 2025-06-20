export const Footer = () => {
  return (
    <footer style={{fontFamily: "Poppins"}} className="bg-slate-950 text-center text-slate-300 px-6 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 justify-between items-center text-md text-center">
          <p>
            Pokémon and Pokémon character names are trademarks of Nintendo, Game Freak, and The Pokémon Company.
          </p>
          <p className="text-sm mt-1 text-slate-400">
            © {new Date().getFullYear()} PokeDexplorer. This project is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company.
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Powered by <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">PokéAPI</a>
          </p>
      </div>
    </footer>
  );
};
