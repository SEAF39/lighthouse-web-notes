const sentence = "hello there from lighthouse labs";

let delay = 0; // Delay before showing each character

for (const char of sentence) {
  // Use setTimeout to delay each character's appearance
  setTimeout(() => {
    process.stdout.write(char); // Use process.stdout.write to avoid automatic newline
  }, delay);

  delay += 50; // Increase the delay before the next character
}

// Add a newline after the animation is complete
setTimeout(() => {
  console.log("\n");
}, delay);
