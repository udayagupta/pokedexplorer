export const PageNavigation = () => {
  const navigations = [
    {
      name: "Baisc Info",
      id: "basic-info-section",
    },
    {
      name: "Breeding",
      id: "breeding-section",
    },
    {
      name: "Training",
      id: "training-section",
    },
    {
      name: "Forms",
      id: "forms-section",
    },
    {
      name: "Evolution",
      id: "evolution-section",
    },
    {
      name: "Location Area",
      id: "location-section",
    },
  ];

  const scrollToSectio = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-labelledby="page-nav"
      className="p-3 flex justify-center gap-3 flex-col items-center "
    >
      <ul className="flex justify-between items-center w-full gap-5 page-nav">
        {navigations.map((nav, index) => (
          <li
            title={`Jump to ${nav.name}`}
            key={index}
            className="text-slate-950 page-nav-item max-w-maxa w-full  text-center text-md font-semibold bg-slate-400 rounded-[100vw]"
          >
            <button
              className="w-full cursor-pointer"
              onClick={() => scrollToSectio(nav.id)}
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
