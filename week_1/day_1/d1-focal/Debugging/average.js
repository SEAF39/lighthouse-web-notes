
/*

// The given code contains a syntax error in the for-of loop, where ++ has been mistakenly added before num. This will cause the loop to increment the value of num before it's even used in the calculation, leading to incorrect results. To fix this, the line sum ++ num; should be changed to sum += num;.

function average(list) {
  var sum = 0;

  for (var num of list) {
    sum ++ num;
  }

  return sum / list.length;

console.log(average([3, 5, 7]));
*/

function average(list) {
  // declare a variable to store the sum of the numbers
  var sum = 0;

  // loop through each number in the list
  for (var num of list) {
    // add the current number to the sum here
    sum += num;
  }

  // return the average by dividing the sum by the length of the list
  return sum / list.length;
}

// log the result of the average function with an example array of numbers
console.log(average([3, 5, 7]));