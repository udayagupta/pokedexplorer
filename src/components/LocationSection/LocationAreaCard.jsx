import { motion } from "framer-motion";
import { scaleAnimation } from "../../utils/animation";

const LocationAreaCard = ({ item }) => {
  return (
    <motion.div initial={scaleAnimation.initial} animate={scaleAnimation.animate} transition={{duration: 0.5}} className="bg-slate-950 text-sm location-area-card rounded-md w-[200px] min-h-max">
      <div className="bg-slate-700 p-2">
        <h4 className="uppercase">{item.name}</h4>
      </div>
      <div>
        {item.versionDetails.map((item, index) => (
          <div key={index} className="flex flex-col justify-evenly gap-3 p-5">
            <p className="capitalize">
              Method: {item.encounter_details[0].method.name.replace(/-/g, " ")}
            </p>
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
        ))}
      </div>
    </motion.div>
  );
};

export default LocationAreaCard;
