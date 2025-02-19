const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const all = require('./dataGenerator.js');
const path = require('path');

const csvWriter = createCsvWriter({
  header: ['name', 'type', 'price', 'location', 'description', 'foodScore', 'decorScore', 'serviceScore', 'review'],
  path: path.join(`${__dirname}/../data.csv`),
  append: true
});

csvWriter
  .writeRecords(all.all)
  .then(() => {
    console.log('...Done');
  })
  .catch((error) => {
    console.log(error);
  })
  