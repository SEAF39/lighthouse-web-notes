const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connected to server!");
    
    conn.on("data", (data) => {
      console.log("Received data from server:", data);
    });
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();