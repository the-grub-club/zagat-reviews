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

// const updateRestaurantById = () => {
//   pool.query('UPDATE zagat_reviews SET ')
// }

const deleteRestaurantById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM zagat_reviews WHERE rest_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getRestaurantReviewById,
  getRestaurantReviewByName,
  deleteRestaurantById,
}
