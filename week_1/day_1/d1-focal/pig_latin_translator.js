// Retrieve the command line arguments, excluding the path to the node executable and the script
var originalWords = process.argv.slice(2);

// Create an empty array to store the translated words
var pigLatinWords = [];

// Loop through each word in the originalWords array
for (var i = 0; i < originalWords.length; i++) {
  // Translate the current word into Pig Latin and add it to the pigLatinWords array
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

// Join the translated words into a single string and log the result to the console
console.log(pigLatinWords.join(' '));

// Function to translate a word into Pig Latin
function translateToPigLatin(word) {
  // Return a new string consisting of the word's second character to the end, followed by the first character and "ay"
  return word.slice(1) + word[0] + "ay";
}


console.log("originalWords is", originalWords);
console.log("pigLatinWords is", pigLatinWords);