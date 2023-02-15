// Module 1 - Week3
// Name Formatter Assignment
// nameInverter


const nameInverter = function(name) {
  // If the input name is an empty string, return an empty string
  if (name === '') {
    return '';
  }

  // Split the input name into an array of words using a space character as the separator
  const arr = name.split(' ');

  // Define an array of honorifics that are commonly used before a person's name
  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];

  // Find the index of the first word that is not an honorific
  let start = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let honorific of honorifics) {
      if (honorific === arr[x]) {
        // If an honorific is found, set the start index to the next word
        start = x + 1;
        break;
      }
    }
  }

  // Create an empty array called results to store the inverted name
  let results = [];

  // Loop through the rest of the words in the input name, starting from the start index
  for (let x = start; x < arr.length; x++) {
    if (arr[x] !== '' && !results.length) {
      // If the results array is empty, add the first non-empty word to it
      results.push(arr[x]);
    } else if (arr[x] !== '') {
      // If the results array is not empty, add the word with a comma and space, and then reverse the array
      results.push(arr[x] + ',');
      results.reverse();
    }
  }

  // Check if an honorific was found and if the results array is not empty
  if (start && results.length) {
    // Concatenate the honorific with the inverted name, with a space in between
    return arr[start - 1] + ' ' + results.join(' ');
  } else {
    // Otherwise, simply return the inverted name
    return results.join(' ');
  }
}

// Export the nameInverter function to make it available for use in other modules
module.exports = nameInverter;
