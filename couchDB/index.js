const nano = require('nano')('http://localhost:5984');
const z_reviews = nano.db.use('z_reviews');
const all = require('../database/dataGenerator.js');

console.log('starting bulk insert', Date.now());

z_reviews.bulk({ docs: all.all })
  .then((body) => {
    console.log('Done', Date.now());
});

// z_reviews.get('107').then((body) => {
//   console.log(body);
// });