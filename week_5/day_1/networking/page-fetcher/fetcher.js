const request = require('request');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide a valid URL and file path.');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Failed to download file.');
    if (error) console.error(error.message);
    process.exit(1);
  }

  try {
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      rl.question(`${filePath} already exists. Overwrite? (Y/N): `, (answer) => {
        if (answer === 'Y' || answer === 'y') {
          writeFile(body);
        } else {
          console.log('Exiting without overwriting file.');
          process.exit(0);
        }
        rl.close();
      });
    } else {
      console.error(`${filePath} is not a valid file path.`);
      process.exit(1);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      writeFile(body);
    } else {
      console.error(`Failed to check if file exists: ${error.message}`);
      process.exit(1);
    }
  }
});

function writeFile(body) {
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error(`Failed to write file: ${error.message}`);
      process.exit(1);
    }
    const stats = fs.statSync(filePath);
    console.log(`Downloaded and saved ${stats.size} bytes to ${path.resolve(filePath)}.`);
  });
}
