const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Stocks = require('../database/Stocks.js');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

//Show a list of alsoBougth
app.get('/api/alsoBought/:id', (req, res) => {
  Stocks.findRandom().limit(12).exec({ id: req.params.id }, (error, results) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send(results);
  });
});

// Get all stock records
app.get('/api/alsoBought/', (req, res) => {
  Stock.readAll((err, stocks) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(stocks);
    }
  });
});

//Show the stock record in the db for the specific id
app.get('/api/alsoBought/:id/show', (req, res) => {
  Stock.readOne(req.params.id, (err, stock) => {
    if (stock) {
      res.status(200).json(stock);
    } else {
      res.sendStatus(404);
    }
  });
});

//Create a new stock record
app.post('/api/alsoBought/', (req, res) => {
  Stock.create(req.body.stock, (err, newStock) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json(newStock);
    }
  });
});    

//Update a existing stock record
app.put('/api/alsoBought/:id', (req, res) => {
  Stock.update(req.params.id, req.body.stock, (err, stock) => {
    if (stock) {
      res.status(200).json(todo);
    } else {
      res.sendStatus(404);
    }
  });
});

//Delete a record of the specific id
app.delete('/api/alsoBought/:id', (req, res) => {
  Stocks.delete(req.params.id, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listengin on port ... ${PORT}`);
});


// // Update Stock -- member route
// app.patch('/api/alsoBought/:id', function(req, res) {
//   //5bce00c26cde8d39f3159b7f
//   Stock.findAndModify({
//     query: {_id: req.params.id},
//     //update: {$inc: {fieldToUpdate: newValue}},
//     //maybe want to update prices and  rating, ratingBlur
//     upsert: true
//   });
// });


// obj.id = i;
// obj.name = faker.company.companyName();
// obj.rating = generateRandomRating();
// obj.ratingBlurb = obj.rating + '% of analysts agree this stock is a ' + buyOrSell();
// obj.price = generateRandomStockPrice();
// obj.priceChange = generateRandomPriceChange();