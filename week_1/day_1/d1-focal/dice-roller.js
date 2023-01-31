let args = process.argv.slice(2);
let num = Number(args[0]);

function diceRoller(num) {
  let emptyArr = []
  let joined = "Rolled 3 dice:"
  for (let i = 0; i < num; i++) {
    emptyArr.push(Math.floor(Math.random() * Math.floor(6)) + 1)
  }
  return `Rolled 3 dices: ${emptyArr}`
}

console.log(diceRoller(num))

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

console.log(getRandomInt(6));

console.log(getRandomInt(7));
