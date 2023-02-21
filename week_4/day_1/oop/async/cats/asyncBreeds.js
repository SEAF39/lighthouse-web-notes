const fs = require("fs");

// This function reads breed details from a file and passes it to a callback function
const breedDetailsFromFile = function (breed, callback) {
  // Read the file with the breed's name
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // If there was an error reading the file, call the callback with undefined
    if (error) {
      console.error(`Error reading ${breed} file: ${error}`);
      return callback(undefined);
    }

    // Otherwise, call the callback with the file's contents
    console.log(`In readFile's Promise: it has the data.`);
    return callback(data.trim());
  });

  // Log a message indicating that readFile has been called
  console.log("breedDetailsFromFile: Calling readFile...");
};

module.exports = breedDetailsFromFile;
