const mongoose = require('mongoose');
const random = require('mongoose-random');
const db = require('./index.js');

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

stockDataSchema.plugin(random, {path: 'r'});

const Stocks = mongoose.model('Stocks', stockDataSchema);

module.exports = Stocks;
