export const locationAreaEncounter = (data, gameVersion) => {
  // console.log("All Data", data);
  let locations = [];
  data?.forEach((item) => {
    const versionDetails = item.version_details?.filter(
      (vd) => vd.version.name === gameVersion
    );

    // console.log("Version Details" ,versionDetails);
    
    if (versionDetails && versionDetails.length > 0) {
      locations.push({
        name: item.location_area.name.replace(/-/g, " "),
        versionDetails,
      })
    }
  });

  console.log(locations);
  return locations;
};
