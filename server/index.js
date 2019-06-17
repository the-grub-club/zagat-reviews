require('newrelic');
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

const url = '/restaurant/:id/review';

app.get(url, (req, res) => {
  const id = req.params.id;
  postgresQueries.getRestaurantReviewById((error, result) => {
    if (error) {
      logger.error('Got database error %s', error);
      res.status(500).send();
    } else {
      res.send(result.rows);
    }
  }, id);
});

app.patch(url, (req, res) => {
  const id = req.params.id;
  postgresQueries.updateRestaurantById(id, req.body, (error, result) => {
    if (error) {
      logger.error('Was not able to update in database %s', error);
      res.status(500).send();
    } else {
      logger.info('Updated..');
      res.status(200).send();
    }
  });
})

app.delete(url, (req, res) => {
  const id = req.params.id;
  postgresQueries.deleteRestaurantReviewById(id, (error, result) => {
    if (error) {
      logger.error('Was not able to delete from database %s', error);
      res.status(500).send();
    } else {
      logger.info('Deleted..');
      res.status(200).send();
    }
  });
})

app.post('/addrestaurant/review', (req, res) => {
  postgresQueries.addRestaurant(req.body, (error, result) => {
    if (error) {
      logger.error('Was not able to insert to database %s', error);
      res.status(500).send();
    } else {
      logger.info('Added..');
      res.status(201).send();
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));
