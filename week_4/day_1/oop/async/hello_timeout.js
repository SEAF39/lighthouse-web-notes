
/* 

Challenge #1

console.log('Before timeout');

// Schedule a callback function to be executed after 3 seconds
setTimeout(() => {
  console.log('4311o'); // Log the first word
  console.log('th3r3'); // Log the second word
  console.log('w0r1d'); // Log the third word
}, 3000);

console.log('After timeout'); // Log a message after scheduling the timeout

*/

// Challenge #2

console.log('Before timeout');

// Schedule a callback function to be executed after 3 seconds
setTimeout(() => {
  console.log('4311o'); // Log the first word
  // Schedule another callback function to be executed after 1 second
  setTimeout(() => {
    console.log('th3r3'); // Log the second word
    // Schedule another callback function to be executed after 1 second
    setTimeout(() => {
      console.log('w0r1d'); // Log the third word
    }, 1000);
  }, 1000);
}, 3000);

console.log('After timeout'); // Log a message after scheduling the timeout
