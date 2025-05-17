export const locationAreaEncounter = (data, gameVersion) => {
  let locations = [];
  data?.forEach((item) => {
    const versionDetails = item.version_details?.filter(
      (vd) => vd.version.name === gameVersion
    );
    
    if (versionDetails && versionDetails.length > 0) {
      locations.push({
        name: item.location_area.name.replace(/-/g, " "),
        versionDetails,
      })
    }
  });

  console.log(locations)
  return locations;
};
