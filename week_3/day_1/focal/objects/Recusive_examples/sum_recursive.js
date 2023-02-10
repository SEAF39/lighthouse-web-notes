// Module 1 - Week3
//Summing with Recursion (Example)

function sumToOne(n) {
  // The base case: if n is equal to 1, return 1
  if (n === 1) {
    return 1;
  }
  
  // The recursive case: if n is greater than 1, return n + sumToOne(n-1)
  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));
