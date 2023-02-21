// Import the readline module
const readline = require('readline');

// Create a readline interface using stdin and stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize an empty object to store the user's answers
let answers = {};

// Ask the user for their name
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  // Store their answer in the answers object
  answers.name = name;

  // Ask the user for an activity they like doing
  rl.question("What's an activity you like doing? ", (activity) => {
    // Store their answer in the answers object
    answers.activity = activity;

    // Ask the user for the music they listen to while doing the activity
    rl.question("What do you listen to while doing that? ", (music) => {
      // Store their answer in the answers object
      answers.music = music;

      // Ask the user for their favorite meal
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        // Store their answer in the answers object
        answers.meal = meal;

        // Ask the user for their favorite food for that meal
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          // Store their answer in the answers object
          answers.food = food;

          // Ask the user for their favorite sport
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            // Store their answer in the answers object
            answers.sport = sport;

            // Ask the user for their superpower
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              // Store their answer in the answers object
              answers.superpower = superpower;

              // Generate the profile string using the answers
              const profile = `${answers.name} loves ${answers.activity}, listening to ${answers.music} while doing it. Their favorite meal is ${answers.meal} and they love to eat ${answers.food} for it. Their favorite sport is ${answers.sport} and their superpower is ${answers.superpower}.`;

              // Log the profile string to the console
              console.log(profile);

              // Close the readline interface
              rl.close();
            });
          });
        });
      });
    });
  });
});
