const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host : 'localhost', // IP address here,
    port : 50541 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connected to server!");
    
    conn.on("data", (data) => {
      console.log("Received data from server:", data);
    });
  });
  
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


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();