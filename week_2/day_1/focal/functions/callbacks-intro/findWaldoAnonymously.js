// Anonymous Functions Excercise

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
