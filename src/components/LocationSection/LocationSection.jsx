import React, { useEffect, useState } from "react";
import { usePokemonLocations } from "../../hooks/usePokemonLocations";
import Loader from "../Loader";
import { locationAreaEncounter } from "../../utils/locationAreaEncounters";
import LocationAreaCard from "./LocationAreaCard.jsx";

const LocationSection = ({ url, gameVersion }) => {
  const locationData = usePokemonLocations(url);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
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

  return (
    <section>
      <div className="text-center text-2xl my-2 font-semibold">
        <h3>Location Area Encounters (in work!)</h3>
      </div>
      <ul className="flex gap-5 flex-wrap">
        {locations.length > 0 ? (
          locations?.map((item, index) => (
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
    </section>
  );
};

export default LocationSection;
