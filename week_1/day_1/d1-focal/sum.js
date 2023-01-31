/*
Here are the steps to solve the problem:

Start by understanding the problem: The problem requires writing a node program that takes in an unlimited number of command line arguments, goes through each argument and prints out the sum of only the integer arguments. If an argument is not a whole number, it should be skipped.

Plan for your conquest:

Store the command line arguments in an array.
Remove the default first two elements from the array to only get the user-defined arguments.
Loop through the array to get the sum of the integer arguments.
Ignore any non-integer argument and continue looping.
Log the result to the console.
Implement the plan:

Store the command line arguments in an array using process.argv
Remove the first two elements from the array using the slice method.
Loop through the remaining elements and get the sum of integer arguments using the Number.isInteger method.
Ignore any non-integer argument and continue looping.
Log the result to the console using console.log.
Reassess: After each step, make sure to test the code to ensure it is working as expected. If there are any errors, troubleshoot and fix them.

Finalize the solution: Once the code is working as expected, finalize the solution by cleaning up the code and making sure it is well-commented.

*/


const args = process.argv.slice(2);
let total = 0;

for (let i = 0; i < args.length; i++) {
  const valueAtIndex = Number(args[i]);

  if (Number.isInteger(valueAtIndex)) {
    total += valueAtIndex;
  }
}

console.log('Integer arguments sum: ', total);


