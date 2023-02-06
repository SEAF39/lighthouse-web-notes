// Anonymous Functions Excercise //

/*
// define the findWaldo function that takes in an array and a callback function as arguments
const findWaldo = (arr, callback) => {
  // loop through the elements of the array
  for (let i = 0; i < arr.length; i++) {
    // if the current element is "Waldo", call the callback function with the index passed as an argument
    if (arr[i] === "Waldo") {
      callback(i);
      // break the loop once the callback function has been called
      break;
    }
  }
};

// call the findWaldo function with an array and an anonymous function as arguments
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  // log a message with the index passed to the function
  console.log("Found Waldo at index " + index + "!");
});
*/

// Exercise - Refactor findWaldo

// Define the findWaldo function that takes an array and a callback function as arguments
const findWaldo = (arr, callback) => {
  // Use forEach method to iterate through the elements of the array
  arr.forEach(function(element, index) {
    // If the element is "Waldo"
    if (element === "Waldo") {
      // Invoke the callback function and pass in the index as an argument
      callback(index);
    }
  });
};

// Call the findWaldo function and pass in an anonymous callback function as an argument
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  // Log the index to the console
  console.log("Waldo is located at index:", index);
});
