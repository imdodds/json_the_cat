const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
  const data = JSON.parse(body);

  if (error) {
    console.log('error:', error);
  }

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }

});
