// import the readline module from the Node.js standard library
const readline = require('readline'); 

// create a readline interface to listen for user input on the standard input (stdin) stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// register an event listener for the 'line' event, which is triggered when the user presses enter
rl.on('line', (input) => {
  
  // if the input is 'b', beep immediately
  if (input === 'b') { 

    // write the system beep character to the standard output (stdout) stream
    process.stdout.write('\x07'); 
  } else {


    // try to convert the input to a number
    
    const number = Number(input); 
    
    // check if the input is a valid number between 1 and 9
    if (!isNaN(number) && number >= 1 && number <= 9)
    
    { 
      // log a message saying that a timer is set for the given number of seconds
      console.log(`Setting timer for ${number} seconds...`); 
      setTimeout(() => {
        
        // schedule a timeout to beep after the given number of seconds has passed
        process.stdout.write('\x07'); 
      }, number * 1000);
    }
  }
});

// register an event listener for the 'close' event, which is triggered when the user presses ctrl + c
rl.on('close', () => {

// log a farewell message
  console.log('Thanks for using me, ciao!'); 

// exit the program with code 0
  process.exit(0); 
});

// log a welcome message to the console
console.log('Welcome to the timer program. Please enter a number between 1 and 9, or press "b" to beep immediately.'); 
