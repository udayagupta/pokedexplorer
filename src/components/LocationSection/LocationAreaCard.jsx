const LocationAreaCard = ({ item }) => {

  return (
    <div className="bg-slate-950 rounded-md p-4">
      <div>
        <h4 className="uppercase text-md">{item.name}</h4>
      </div>
      <div>
        {item.versionDetails.map((item, index) => (
          <div key={index} className="flex justify-evenly gap-5">
            <div className="flex justify-center items-center">
              {
                <p className="capitalize">
                  {item.encounter_details[0].method.name.replace(/-/g, " ")}
                </p>
              }
            </div>
            <div className="flex flex-col justify-start text-left">
              <p>Chance: {item.max_chance}%</p>
              <p>
                Level:
                {item.encounter_details[0].max_level >
                item.encounter_details[0].min_level
                  ? `${item.encounter_details[0].min_level}-${item.encounter_details[0].max_level}`
                  : `${item.encounter_details[0].max_level}`}
              </p>
              {item.encounter_details[0].condition_values.length > 0 && (
                <p>
                  {item.encounter_details[0].condition_values[0].name.replace(
                    /-/g,
                    " "
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationAreaCard;
