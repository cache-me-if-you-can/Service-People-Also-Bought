const mongoose = require('mongoose');
const random = require('mongoose-random');

mongoose.Promise = global.Promise;

const stockDataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rating: Number,
  ratingBlurb: String,
  price: Number,
  priceChange: Number,
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transactions',
    },
  ],
},
{
  timestamps: true,
});

stockDataSchema.plugin(random, { path: 'r' });

module.exports = mongoose.model('Stocks', stockDataSchema);
// mongoimport --db robinhoodDB --collection stocks --type csv --columnsHaveTypes --fields "id.int32(),name.string(),rating.decimal(),ratingBlurb.string(),price.decimal(),priceChange.decimal()" --file /Users/emely/Desktop/SDC/stocks.csv
