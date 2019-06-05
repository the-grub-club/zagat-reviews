const mysql = require('mysql');
const dataGenerator = require('./dataGenerator.js');
const config = require('./config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.password,
});

connection.connect((error1) => {
  if (error1) {
    throw error1;
  }

  console.log('Connected to database!');

  const deleteDatabase = 'DROP DATABASE IF EXISTS restaurants';
  const createDatabase = 'CREATE DATABASE restaurants';
  const useDatabase = 'USE restaurants';
  const createTable = 'CREATE TABLE restaurants (rest_id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, price VARCHAR(5) NOT NULL, location VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, foodScore VARCHAR(5) NOT NULL, decorScore VARCHAR(5) NOT NULL, serviceScore VARCHAR(5) NOT NULL, review VARCHAR(400) NOT NULL, PRIMARY KEY (rest_id));';
  const insertValues = 'INSERT INTO restaurants (name, type, price, location, description, foodScore, decorScore, serviceScore, review) VALUES ?';
  const values = dataGenerator.seedData;

  connection.query(deleteDatabase, [values], (error2) => {
    if (error2) {
      throw error2;
    }
  });
  connection.query(createDatabase, [values], (error3) => {
    if (error3) {
      throw error3;
    }
  });
  connection.query(useDatabase, [values], (error4) => {
    if (error4) {
      throw error4;
    }
  });
  connection.query(createTable, [values], (error5) => {
    if (error5) {
      throw error5;
    }
  });
  connection.query(insertValues, [values], (error6, result) => {
    if (error6) {
      throw error6;
    }
    console.log(result.affectedRows);
    return result.affectedRows;
  });
});
