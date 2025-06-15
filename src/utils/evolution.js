const cleanEvolutionDetails = (evoDetails) => {
  if (!evoDetails) return "";

  const trigger = evoDetails.trigger?.name;

  const gender = evoDetails.gender;
  const held_item = evoDetails.held_item?.name;
  const item = evoDetails.item?.name;
  const known_move = evoDetails.known_move?.name;
  const know_move_type = evoDetails.known_move_type?.name;
  const location = evoDetails.location?.name;
  const min_affection = evoDetails.min_affection;
  const min_beauty = evoDetails.min_beauty;
  const min_happiness = evoDetails.min_happiness;
  const min_level = evoDetails.min_level;
  const needs_overworld_rain = evoDetails.needs_overworld_rain;
  const party_species = evoDetails.party_species?.name;
  const party_type = evoDetails.party_type?.name;
  const relative_physical_stats = evoDetails.relative_physical_stats;
  const time_of_day = evoDetails.time_of_day;
  const trade_species = evoDetails.trade_species?.name;

  let triggerTexts = [];

  if (trigger === "level-up" && min_level) {
    triggerTexts.push(`Reach level ${min_level}`);
  } else if (trigger === "level-up") {
    triggerTexts.push("Level up");
  } else if (trigger === "trade") {
    triggerTexts.push("Trade");
  } else if (trigger === "use-item") {
    triggerTexts.push(`Use ${item.replace(/-/g, " ")}`);
  } else {
    triggerTexts.push(trigger.replace(/-/g, " "));
  }

  if (min_happiness) triggerTexts.push(`with happiness >= ${min_happiness}`);
  if (held_item) triggerTexts.push(`while holding ${held_item.replace(/-/g, " ")}`);
  if (known_move) triggerTexts.push(`knowing move ${known_move.replace(/-/g, " ")}`);
  if (know_move_type) triggerTexts.push(`with a ${know_move_type}-type move`);
  if (location) triggerTexts.push(`at ${location.replace(/-/g, " ")}`);
  if (min_affection) triggerTexts.push(`with ${min_affection} affection`);
  if (min_beauty) triggerTexts.push(`with ${min_beauty} beauty`);
  if (needs_overworld_rain) triggerTexts.push(`during rain`);
  if (party_species) triggerTexts.push(`with ${party_species?.name.replace(/-/g, " ")} in party`);
  if (party_type) triggerTexts.push(`with a ${party_type}-type Pokemon in party`);
  if (relative_physical_stats) {
    let physical_stats;
    switch (relative_physical_stats) {
      case 0:
        physical_stats = "Attack = Defense";
        break;
      case 1:
        physical_stats = "Attack > Defense";
      case -1:
        physical_stats = "Attack < Defense";
    }

    triggerTexts.push(physical_stats);
  }
  if (time_of_day && time_of_day.length > 0) triggerTexts.push(`at ${time_of_day}`);
  if (trade_species) triggerTexts.push(`for ${trade_species.replace(/-/g, " ")}`);
  if (gender) {
    if (gender === 1) triggerTexts.push("(female only)");
    if (gender === 2) triggerTexts.push("(male only)");
  }


  return triggerTexts.join(", ");
};

export const cleanEvolutionData = (data) => {
  let cleanData = {
    firstStage: data.species.name,
    secondStage: [],
    thirdStage: [],
  };
  if (data.evolves_to.length > 0 && data.evolves_to) {
    data.evolves_to.map((item) => {
      const secondStagePokemon = {
        name: item.species.name,
        evolution_details: item.evolution_details?.[0] || null,
        triggerText: cleanEvolutionDetails(item.evolution_details?.[0]),
      };

      cleanData.secondStage.push(secondStagePokemon);

      if (item.evolves_to && item.evolves_to.length > 0) {
        item.evolves_to.map((thirdStage) => {
          const thirdStagePokemon = {
            name: thirdStage.species.name,
            evolution_details: thirdStage.evolution_details?.[0] || null, 
            triggerText: cleanEvolutionDetails(
              thirdStage.evolution_details?.[0]
            ),
          };

          cleanData.thirdStage.push(thirdStagePokemon);
        });
      }
    });
  }
  return cleanData;
};
