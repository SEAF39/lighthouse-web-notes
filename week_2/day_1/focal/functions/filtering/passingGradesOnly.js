// Filtering With Callbacks - Exercise
// Module 1 - Week2 - FOCAL

// Given array of grades
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// Declare the callback function
const isPassing = (grade) => {
  return grade >= 70;
};

// Use the filter method to filter down to only passing grades
const passingGrades = grades.filter(isPassing);

// Log the results
console.log("Passing grades:", passingGrades);

// Refactor the callback function to be anonymous
const passingGrades2 = grades.filter(function(grade) {
  return grade >= 70;
});

// Log the results
console.log("Passing grades (anonymous function):", passingGrades2);

// Refactor the anonymous function to be an arrow function
const passingGrades3 = grades.filter(grade => grade >= 70);

// Log the results
console.log("Passing grades (arrow function):", passingGrades3);
