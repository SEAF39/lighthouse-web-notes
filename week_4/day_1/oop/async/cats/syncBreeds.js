// define an object containing cat breeds and their descriptions
const catBreeds = {
  Balinese:
  
  "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  
  Bombay: 
  
  "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// define a function to get the description of a cat breed

const breedDetails = function(breed) {

  // return the description of the specified breed from the catBreeds object

  return catBreeds[breed];

};


// export the breedDetails function so that it can be used in other modules

module.exports = breedDetails;
