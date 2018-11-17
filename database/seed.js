const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
// const db = require('./index.js');
// const Stocks = require('./Stocks.js');
const generateRandomStockPrice = () => (Math.random() * 999).toFixed(2);

const generateRandomRating = () => (Math.random() * 99).toFixed(0);

const generateRandomPriceChange = () => (Math.random() * 8).toFixed(2);


const buyOrSell = () => {
  const arr = ['buy', 'sell'];
  return arr[Math.round(Math.random())];
};

const sampleGenerator = () => {
  const stocks = [];
  const writer = csvWriter({ headers: ['id', 'name', 'rating', 'ratingBlurb', 'price', 'priceChange'] });
  writer.pipe(fs.createWriteStream('out.csv'));
  for (let i = 1; i <= 5e6; i += 1) {
    const obj = {};
    obj.id = i;
    obj.name = faker.company.companyName();
    obj.rating = generateRandomRating();
    obj.ratingBlurb = `${obj.rating} % of analysts agree this stock is a ${buyOrSell()}`;
    obj.price = generateRandomStockPrice();
    obj.priceChange = generateRandomPriceChange();
    writer.write([obj.id, obj.name, obj.rating, obj.ratingBlurb, obj.price, obj.priceChange]);
    if (i === 1e6 || i === 2e6 || i === 3e6 || i === 4e6 || i === 5e6
      || i === 6e6 || i === 7e6 || i === 8e6 || i === 9e6 || i === 10e6) {
      console.log(i);
    }
  }
  writer.end();
};

sampleGenerator();

// const insertSampleStocks = () => {
//   Stocks.create(sampleGenerator())
//     .then(() => db.disconnect());
// };

// insertSampleStocks();
