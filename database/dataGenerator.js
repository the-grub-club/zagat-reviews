const faker = require('faker');
const hardData = require('./hardData.js');

const getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const getRandomRecords = function () {

  let allRestaurants = [];

  for (let i = 7000001; i <= 8000000; i += 1) {
    oneRestaurant = {
      _id: i.toString(),
      name: faker.company.companyName(),
      type: getRandomItem(hardData.types),
      price: getRandomItem(hardData.prices),
      location: getRandomItem(hardData.locations),
      description: getRandomItem(hardData.descriptions),
      foodScore: randomScore(),
      decorScore: randomScore(),
      serviceScore: randomScore(),
      review: faker.lorem.paragraph().substring(0, 390),
    }
    
    allRestaurants.push(oneRestaurant);
  }

  return allRestaurants;
};

var all = getRandomRecords();

module.exports = {
  all
};
