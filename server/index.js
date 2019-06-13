const express = require('express');
const logger = require('./winston.js');
const CORS = require('cors');
const bodyParser = require('body-parser');
const postgresQueries = require('../database/psqlQueries');

const app = express();
const port = 7007;

app.use(bodyParser.json());

app.use(CORS());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/restaurant/:id/review', (req, res) => {
  const id = req.params.id;
  postgresQueries.getRestaurantReviewById((error, result) => {
    if (error) {
      console.log(error)
      logger.error('Got database error %s', error);
      res.status(500).send();
    } else {
      res.send(result.rows);
    }
  }, id);
});


app.delete('/restaurant/:id/review', (req, res) => {
  const id = req.params.id;
  postgresQueries.deleteRestaurantReviewById((error, result) => {
    if (error) {
      logger.error('Got not delete from database %s', error);
      res.status(500).send();
    } else {
      logger.info('Deleted..')
      res.status(200).send();
    }
  }, id)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
