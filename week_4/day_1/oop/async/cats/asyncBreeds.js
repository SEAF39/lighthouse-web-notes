const fs = require('fs').promises;

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  return fs.readFile(`./data/${breed}.txt`, 'utf8')
    .then(data => {
      console.log("In readFile's Promise: it has the data.");
      return data;
    })
    .catch(error => {
      console.log(error);
    });
};

// Now we can use the function with a promise chain to log the data:
breedDetailsFromFile('Bombay')
  .then(data => {
    console.log('Return Value: ', data);
  })
  .catch(error => {
    console.log(error);
  });



  module.exports = breedDetailsFromFile;
