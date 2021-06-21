const fetch = require('node-fetch');

function auau() {
  const apiDog ='https://dog.ceo/api/breeds/image/random';

  return fetch(apiDog)
  .then((result) => result.json())
  .then((json) => result.ok ? Promise.resolve(json) : Promise.reject(json));

}

module.exports = auau;