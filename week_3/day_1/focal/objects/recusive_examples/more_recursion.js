const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Recursive case: if the current item is an array, call the function again with that array
      printItems(item);
    } else {
      // Base case: if the current item is not an array, just log it
      console.log(item);
    }
  });
}

const array = ["A", ["B", "C"], "D", "E"];
printItems(array);