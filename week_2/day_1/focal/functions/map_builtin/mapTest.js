
// Using Map
// Module 1 - Week2 - Exercise

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// Use the map method to transform the array of lighthouse names
// into an array of the lengths of each name
const nameLengths = lighthouses.map(lighthouse => {
  // The function passed to map will receive each lighthouse name as its argument
  // We return the length of the name for each lighthouse
  return lighthouse.length;
});

// Log the array of lengths to the console
console.log(nameLengths);
// Output: [ 15, 13, 11, 16, 10, 11, 10 ]
