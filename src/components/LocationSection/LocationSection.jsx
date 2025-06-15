import { useEffect, useState } from "react";
import { usePokemonLocations } from "../../hooks/usePokemonLocations";
import {Loader} from "../Loader";
import { locationAreaEncounter } from "../../utils/locationAreaEncounters.js";
import { LocationAreaCard } from "./LocationAreaCard.jsx";

const LOAD_COUNT = 10;

export const LocationSection = ({ url, gameVersion }) => {
  const locationData = usePokemonLocations(url);
  const [locations, setLocations] = useState([]);
  const [totalCards, setTotalCards] = useState(LOAD_COUNT);

  useEffect(() => {
    setTotalCards(LOAD_COUNT);
    const newLocations = locationAreaEncounter(
      locationData.locations,
      gameVersion
    );
    setLocations(newLocations);
  }, [gameVersion, locationData.locations]);

  if (locationData.loading)
    return (
      <div>
        <Loader size={"50px"} />
      </div>
    );

  if (locationData.error) <div>Error fetching Location Area Encounter</div>;

  const loadMore = () => {
    setTotalCards(prevData => prevData+LOAD_COUNT);
  }
  
  return (
    <section id="location-section">
      <div className="text-center text-2xl mb-[20px] font-semibold">
        <h3>Location Area Encounters</h3>
      </div>
      <ul className="gap-5 mx-auto location-area-list">
        {locations.length > 0 ? (
          locations.slice(0, totalCards).map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 text-center rounded-md overflow-hidden"
            >
              <LocationAreaCard item={item}/>
            </li>
          ))
        ) : (
          <li className="text-center text-xl w-full my-5">
            No encounters for this game version
          </li>
        )}
      </ul>
      {totalCards < locations.length && (
        <div className="flex justify-center">
          <button onClick={loadMore} className="bg-slate-700 p-2 rounded-md mt-5">Load More</button>
        </div>
      )}
    </section>
  );
};
