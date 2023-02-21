// Define an array of spinner characters
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

// Initialize the delay time to 100ms
let delay = 100;

// Loop through the spinnerChars array and set up a setTimeout for each character
// refatoring the code 
for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    // Use template literals to construct the output string with the current spinner character and the necessary spaces to clear any leftover characters from previous prints
    process.stdout.write(`\r${spinnerChars[i]}   `);
  }, delay);
  
  // Increment the delay by 200ms for each iteration
  delay += 200;
}
