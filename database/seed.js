const db = require('./index.js');
const Stocks = require('./Stocks.js');
const faker = require('faker');

const generateRandomStockPrice = function() {
  return (Math.random() * (2500.00 - 0.01) + 0.01).toFixed(2);
};

const generateRandomRating = () => {
  (Math.random() * 99).toFixed(0);
};

const generateRandomPriceChange = () => {
  Math.random().toFixed(4);
};

const buyOrSell = () => {
  const arr = ['buy', 'sell'];
  return arr[Math.round(Math.random())];
};

const sampleGenerator = () => {
  const stocks = [];
  for (let i = 0; i < 100; i++) {
    const obj = {};
    obj.name = faker.company.companyName();
    obj.rating = generateRandomRating();
    obj.ratingBlurb = obj.rating + '% of analyts agree this stock is a ' + buyOrSell();
    obj.price = generateRandomStockPrice();
    obj.priceChange = generateRandomPriceChange();
    stocks.push(obj);
  }
  return stocks;
}


const insertSampleStocks = () => {
  Stocks.create(sampleGenerator())
    .then(() => db.disconnect());
};

insertSampleStocks();
