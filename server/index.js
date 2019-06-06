const express = require('express');
const logger = require('./winston.js');
const CORS = require('cors');
const bodyParser = require('body-parser');
const postgresQueries = require('../postgresDB/queries.js');
// const database = require('../database/db.js');

const app = express();
const port = 7007;

app.use(bodyParser.json());

app.use(CORS());
app.use(express.static(`${__dirname}/../client/dist`));

logger.info('in server');
app.get('/restaurants/:id/reviews', (req, res) => {
  const id = req.params.id;
  postgresQueries.getRestaurantReviewById((error, result) => {
    if (error) {
      logger.error('Got database error %s', error);
      res.status(500).send();
    } else {
      logger.info('Got data')
      res.send(result.rows);
    }
  }, id);
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// For mySQL
// app.get('/api/restaurants/:id/reviews', (req, res) => {
//   const id = req.params.id;
//   database.getRecords((error, result) => {
//     if (error) {
//       console.log(error);
//       res.status(500);
//       res.end('error!');
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   }, id);
// });