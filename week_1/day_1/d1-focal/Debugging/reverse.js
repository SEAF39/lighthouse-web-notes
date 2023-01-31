/*

The reverse function has a couple of errors. The variable orignal is mispelled and should be original. The method reverseList is also not a valid JavaScript method, and it should be reverse.


var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return orignal.split('').reverseList().join('');
}

*/


// The corrected code here :-
// retrieve the third argument from the command line
var input = process.argv[2];

// check if an input exists
if (input) {
  // if input exists, log the result of reversing the input
  console.log(reverse(input));
}

// define the reverse function
function reverse(original) {
  // split the original string into an array of characters, reverse the order of the array, and then join it back into a string
  return original.split('').reverse().join('');
}
