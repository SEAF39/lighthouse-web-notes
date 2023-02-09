
// Exercise 1 - Callback Arguments
// Module_1 - Week2

// define the findWaldo function that takes in an array and a callback function as arguments
/*
const findWaldo = function(arr, callback) {
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

// define the actionWhenFound function that takes in an index as an argument
const actionWhenFound = function(index) {
  // log a message with the index passed to the function
  console.log("Found Waldo at index " + index + "!");
};


// call the findWaldo function with an array and the actionWhenFound function as arguments
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

// Exercise 2 - Array forEach
// define the actionWhenFound function that takes in an index as an argument

// call the findWaldo function with an array and the actionWhenFound function as arguments

const findWaldo = (arr, callback) => {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      callback(index);
    }
  });
};

const actionWhenFound = index => {
  console.log("Found Waldo at index " + index + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
