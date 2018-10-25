const db = require('./index.js');
const Stocks = require('./Stocks.js');

const sampleStocks = [
  {
    name: 'Not so Merry Men',
    rating: 65,
    ratingBlurb: '65% of analysts agree this stock is a sell',
    price: 22,
    priceChange: -17.23,
  },
  {
    name: 'Abble',
    rating: 22,
    ratingBlurb: '22% of analysts agree this stock is a buy',
    price: 376,
    priceChange: 3.05,
  },
  {
    name: 'El Goog',
    rating: 90,
    ratingBlurb: '90% of analysts agree this stock is a buy',
    price: 1265,
    priceChange: 1.97,
  },
];

const insertSampleStocks = () => {
  Stocks.create(sampleStocks)
    .then(() => db.disconnect());
};

insertSampleStocks();
