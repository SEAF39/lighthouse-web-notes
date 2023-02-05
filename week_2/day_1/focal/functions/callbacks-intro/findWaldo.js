
// Exercise 1 - Callback Arguments
// Module_1 - Week2

// define the findWaldo function that takes in an array and a callback function as arguments
function findWaldo(arr, callback) {
  // loop through the elements of the array
  for (let i = 0; i < arr.length; i++) {
    // if the current element is "Waldo", call the callback function with the index passed as an argument
    if (arr[i] === "Waldo") {
      callback(i);
      // break the loop once the callback function has been called
      break;
    }
  }
}

// define the actionWhenFound function that takes in an index as an argument
function actionWhenFound(index) {
  // log a message with the index passed to the function
  console.log("Found Waldo at index " + index + "!");
}

// call the findWaldo function with an array and the actionWhenFound function as arguments
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

