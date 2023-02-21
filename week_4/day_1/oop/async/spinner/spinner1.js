// Print initial message to console
process.stdout.write('hello from spinner1.js... \rheyyy\n');

// Set up a series of setTimeout functions to print spinner characters at different times
setTimeout(() => {
  process.stdout.write('\r|   '); // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   '); // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   '); // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); // Need to escape the backslash since it's a special character. Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
}, 700);

setTimeout(() => {
   // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
   process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
   // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
   process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
   // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
   process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
   // Need to escape the backslash since it's a special character. Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
   process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  // Use \r to move cursor to the beginning of the line, print the character, and add spaces to clear any leftover characters from previous prints
  process.stdout.write('\r|   '); 
}, 1700);
