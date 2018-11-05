const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Stocks = require('../database/Stocks.js');

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/alsoBought/:id', (req, res) => {
  Stocks.findRandom().limit(12).exec({ id: req.params.id }, (error, results) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send(results);
  });
});

app.listen(PORT, () => {
});
