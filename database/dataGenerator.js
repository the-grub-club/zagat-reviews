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
  for (let i = 1; i <= 10000000; i += 1) {
    let oneRestaurant = [
      faker.company.companyName() + i,
      getRandomItem(hardData.types),
      getRandomItem(hardData.prices),
      getRandomItem(hardData.locations),
      getRandomItem(hardData.descriptions),
      randomScore(),
      randomScore(),
      randomScore(),
      faker.lorem.paragraph().substring(0, 390),
    ]
    allRestaurants.push(oneRestaurant);
  }
  return allRestaurants;
};

var all = getRandomRecords();

module.exports = {
  all
};
