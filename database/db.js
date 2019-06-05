const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.password,
  database: 'restaurants',
});

const getRecords = function (callback, restaurantNumber) {
  const getRecordsString = `SELECT * FROM restaurants WHERE rest_id = ${restaurantNumber}`;
  connection.query(getRecordsString, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getRecords,
};
