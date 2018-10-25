const mongoose = require('mongoose');
// const db = require('./index.js');

mongoose.Promise = global.Promise;

const stockDataSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  ratingBlurb: String,
  price: Number,
  priceChange: Number,
},
{
  timestamps: true,
});

const Stocks = mongoose.model('Stocks', stockDataSchema);

module.exports = Stocks;
