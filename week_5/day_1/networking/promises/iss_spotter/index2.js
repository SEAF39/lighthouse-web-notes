const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log("Next ISS pass times:", passTimes);
  })
  .catch((error) => {
    console.log("Error fetching ISS pass times:", error.message);
  });
