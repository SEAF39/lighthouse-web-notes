const titleCase = function(text) {
  // Convert the input string to all lowercase letters, and split it into an array of individual words
  let words = text.toLowerCase().split(' ');

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of the current word and concatenate it with the rest of the word (excluding the first letter)
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the modified words back together into a string with spaces in between each word
  let result = words.join(' ');

  // Return the final string
  return result;
};

// Export the function so that it can be used in other modules
module.exports = titleCase;
