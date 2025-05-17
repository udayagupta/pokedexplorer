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
        // trigger: thirdStage.evolution_details?.[0] ? thirdStage.evolution_details?.[0].trigger.name : null
      };

      cleanData.secondStage.push(secondStagePokemon);

      if (item.evolves_to && item.evolves_to.length > 0) {
        item.evolves_to.map(thirdStage => {
          const thirdStagePokemon = {
            name: thirdStage.species.name,
            evolution_details: thirdStage.evolution_details?.[0] || null,
            // trigger: thirdStage.evolution_details?.[0] ? thirdStage.evolution_details?.[0].trigger.name : null
          }

          cleanData.thirdStage.push(thirdStagePokemon)
        })
      }

    });

  }
  return cleanData;
};