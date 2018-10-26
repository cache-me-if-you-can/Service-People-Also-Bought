const db = require('./index.js');
const Stocks = require('./Stocks.js');
const faker = require('faker');4

const generateRandomStockPrice = function() {
  return (Math.random() * (2500.00 - 0.01) + 0.01).toFixed(2);
};

const generateRandomRating = function() {
  return (Math.random() * 99).toFixed(0);
};

const generateRandomPriceChange = function() {
      return Math.random().toFixed(4);
};

const buyOrSell = function() {
  var arr = ['buy', 'sell'];
  return arr[Math.round(Math.random())];
}

const sampleGenerator = function() {
  const stocks = [];
  for (let i = 0; i < 100; i++) {
    let obj = {};
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
