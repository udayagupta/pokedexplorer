export const calculateStats = (baseStats) => {
  let cleanStatsData = [];
  let totalBaseStats = 0;

  baseStats.forEach((stat) => {
    const base_stat = stat.base_stat;
    totalBaseStats += base_stat;
    const name = stat.stat.name.replace(/-/g, " ");
    let max_stat;
    if (name === "hp") {
      max_stat = Math.floor(base_stat * 2 + 204);
    } else {
      max_stat = Math.floor((base_stat * 2 + 99) * 1.1);
    }

    const newStat = {
      name,
      base_stat,
      max_stat,
      bar_width: (base_stat / max_stat) * 100,
    };

    cleanStatsData.push(newStat);
  });
  
  return { cleanStatsData, totalBaseStats };
};
