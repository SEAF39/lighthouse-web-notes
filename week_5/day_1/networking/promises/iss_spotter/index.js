const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("Error fetching ISS pass times:", error);
    return;
  }

  for (const pass of passTimes) {
    const dateTime = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${dateTime.toLocaleString()} for ${pass.duration} seconds`);
  }
});
