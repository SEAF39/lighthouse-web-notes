// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};


module.exports = { setupInput };
