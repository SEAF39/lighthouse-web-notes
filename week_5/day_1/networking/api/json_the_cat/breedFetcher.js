const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error fetching data!', error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
