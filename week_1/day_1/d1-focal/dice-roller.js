
 // This line sets a variable args to the result of slicing the process.argv array starting from the 3rd element (2). 

 let args = process.argv.slice(2); 

// This line sets a variable num to the result of converting the first element in the args array to a number using the Number() function.

 let num = Number(args[0]);

//  This is a function that takes a single argument num, which specifies the number of dice rolls to generate.

function diceRoller(num) {
  let emptyArr = []
  let joined = "Rolled 3 dice:"
  
  // This is a for loop that generates 3 random numbers between 1 and 6 and pushes them to the emptyArr array. The random number is generated using Math.random() and Math.floor() functions.

  for (let i = 0; i < num; i++) {
    emptyArr.push(Math.floor(Math.random() * Math.floor(6)) + 1)
  }

  // This line returns a string that includes the number of dice rolls and the values of the dice rolls.

  return `Rolled 3 dices: ${emptyArr}`
}

//  This line logs the result of calling diceRoller with num as the argument to the console.

console.log(diceRoller(num))

// This is a function that generates a random integer between 0 (inclusive) and the specified max value (exclusive). The function returns the result of Math.floor(Math.random() * max).

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

console.log(getRandomInt(6));

console.log(getRandomInt(7));










