const db = require('./index.js');
const Stocks = require('./Stocks.js');

const sampleStocks = [
  {
    _id: 'nfwekrfn435',
    name: 'Not so Merry Men',
    rating: 65,
    ratingBlurb: '65% of analysts agree this stock is a sell',
    price: 22,
    priceChange: -17.23
    created_at: '2017-05-03T03:50:00Z'
  },
  {
    _id: 'nfwekrfn436',
    name: 'Abble',
    rating: 22,
    ratingBlurb: '22% of analysts agree this stock is a buy',
    price: 376,
    priceChange: 3.05
    created_at: '2017-05-03T03:52:00Z'
  },
  {
    _id: 'nfwekrfn436',
    name: 'El Goog',
    rating: 90,
    ratingBlurb: '90% of analysts agree this stock is a buy',
    price: 1265,
    priceChange: 1.97
    created_at: '2017-05-03T03:53:00Z'
  },
]

const insertSampleStocks = () => {
  Stocks.create(sampleStocks)
  .then(() => db.disconnect());
};

insertSampleStocks();