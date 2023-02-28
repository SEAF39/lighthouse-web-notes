// setup interface to handle user input from stdin

const stdin = process.stdin;

const messages = {
  1: "Hi, everyone!",
  2: "Let's play!",
  3: "Good game, well played!",
  4: "Oops, sorry about that!",
  5: "Nice moves!",
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
};

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
};






module.exports = { setupInput };
