const fs = require('fs');
const logger = require('../server/winston.js');
const data = require('./dataGenerator.js');

fs.appendFile('data.json', JSON.stringify(data.all), (err) => {
  if (err) {
    logger.error('Failed to write into data.json', err);
  } else {
    console.log('Done..');
  }
});
