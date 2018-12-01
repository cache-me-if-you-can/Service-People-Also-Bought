const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Stocks = require('../database/mongoDB/Stocks.js');

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

// Get all stock records
app.get('/api/alsoBought/', (req, res) => {
  Stocks.find({}, (err, stocks) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(stocks);
    }
  });
});

// Get the list of alsoBought stocks
app.get('/api/alsoBought/:id', (req, res) => {
  Stocks.findRandom().limit(12).exec({ id: req.params.id }, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// Show the stock record in the db for the specific id
app.get('/api/alsoBought/:id/show', (req, res) => {
  Stocks.find({ id: req.params.id }, (err, stock) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(stock);
    }
  });
});

// Create a new stock record
app.post('/api/alsoBought/', (req, res) => {
  Stocks.create(req.body.stock, (err, newStock) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(newStock);
    }
  });
});

// Update a existing stock record
app.put('/api/alsoBought/:id', (req, res) => {
  Stocks.update({ id: req.params.id }, { $set: { name: req.body.stock.name } },
    (err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(results);
      }
    });
});

// //Delete a record of the specific id
app.delete('/api/alsoBought/:id', (req, res) => {
  Stocks.remove({ id: req.params.id }, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(PORT, () => {
  console.log('Running on Port...', PORT);
});
