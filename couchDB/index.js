const nano = require('nano')('http://localhost:5984');
const z_reviews = nano.db.use('z_reviews');
const all = require('../database/dataGenerator.js');

// z_reviews.bulk({ docs: all.all })
//   .then((body) => {
//     console.log('Done', Date.now());
// });

let startTime = new Date();
z_reviews.get('10')
  .then((body) => {
      console.log(body);
  });