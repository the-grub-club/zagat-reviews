const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'zagat_reviews',
  port: 5432,
})

const getRestaurantReviewById = (callback, id) => {
  pool.query('SELECT * FROM zagat_reviews WHERE rest_id = $1', [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

const getRestaurantReviewByName = (callback, name) => {
  pool.query('SELECT * FROM zagat_reviews WHERE name = $1', [name], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

const updateRestaurantById = (id, body, callback) => {
  let query = `UPDATE zagat_reviews SET `;
  let arr = [];
  for (let key in body) {
    arr.push([key, body[key]]);
  }
  let num = 1;
  let values = [];
  for (let i = 0; i < arr.length; i++) {
    query += `${arr[i][0]} = $${num}`;
    num++;
    values.push(arr[i][1]);
    if (i !== arr.length - 1) {
      query += ', ';
    }
  }
  values.push(id);
  query += ` WHERE rest_id = $${num}`;

  pool.query(query, values, (error, results) => {
    if (error) {
      callback('error', error);
    } else {
      callback(null);
    }
  });
}

const deleteRestaurantReviewById = (id, callback) => {
  pool.query('DELETE FROM zagat_reviews WHERE rest_id = $1', [id], (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  })
}

const addRestaurant = (body, callback) => {
  let values = [];
  for (let key in body) {
    values.push(body[key]);
  }

  pool.query(`INSERT INTO zagat_reviews (name, type, price, location, description, foodScore, decorScore, serviceScore, review) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING rest_id`, values, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
}

module.exports = {
  getRestaurantReviewById,
  getRestaurantReviewByName,
  updateRestaurantById,
  deleteRestaurantReviewById,
  addRestaurant,
}
