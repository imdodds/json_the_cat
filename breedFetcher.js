const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    const data = JSON.parse(body);
  
    if (error) {
      callback('Error:', error);
      return;
    }

    if (response && response.statusCode !== 200) {
      callback('Status code:', response.statusCode);
    }
  
    if (data.length >= 1) {
      callback(null, data[0].description);
      return;
    } else {
      callback(`${breedName} could not be found`, null);
      return;
    }
  
  });
};

module.exports = { fetchBreedDescription };