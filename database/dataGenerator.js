const faker = require('faker');
const hardData = require('./hardData.js');

const getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const getRandomRecords = function () {
  let oneRestaurant = [];
  let allRestaurants = [];

  for (let i = 0; i < 1000000; i += 1) {
    let name = faker.company.companyName();
    let type = getRandomItem(hardData.types);
    let price = getRandomItem(hardData.prices);
    let location = getRandomItem(hardData.locations);
    let description = getRandomItem(hardData.descriptions);
    let foodScore = randomScore();
    let decorScore = randomScore();
    let serviceScore = randomScore();
    let review = faker.lorem.paragraph().substring(0, 390);

    oneRestaurant.push(name, type, price,
      location, description, foodScore,
      decorScore, serviceScore, review);
    
    allRestaurants.push(oneRestaurant);
    oneRestaurant = [];
  }

  return allRestaurants;
};

var all = getRandomRecords();

module.exports = {
  all
};
