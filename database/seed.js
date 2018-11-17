const faker = require('faker');
const fs = require('fs');
// const db = require('./index.js');
// const Stocks = require('./Stocks.js');
const generateRandomStockPrice = () => (Math.random() * 999).toFixed(2);

const generateRandomRating = () => (Math.random() * 99).toFixed(0);

const generateRandomPriceChange = () => (Math.random() * 8).toFixed(2);


const buyOrSell = () => {
  const arr = ['buy', 'sell'];
  return arr[Math.round(Math.random())];
};

const sampleGenerator = (index) => {
  const obj = {};
  obj.id = index;
  obj.name = faker.company.companyName();
  obj.rating = generateRandomRating();
  obj.ratingBlurb = `${obj.rating} % of analysts agree this stock is a ${buyOrSell()}`;
  obj.price = generateRandomStockPrice();
  obj.priceChange = generateRandomPriceChange();
  const record = `${obj.id}, ${obj.name}, ${obj.rating}, ${obj.ratingBlurb}, ${obj.price}, ${obj.priceChange}\n`;
  if (index === 1000000 || index === 2000000 || index === 3000000 || index === 4000000 || index === 5000000
    || index === 6000000 || index === 7000000 || index === 8000000 || index === 9000000 || index === 10000000) {
    console.log(index);
  }
  return record;
};

const streamStocks = fs.createWriteStream('stocks.csv');

function writeStocks(writer) {
  let i = 10e6;
  let index = 1;
  write();
  function write() {
    let ok = true;
    do {
      i -= 1;
      index += 1;
      if (i === 0) {
        writer.write(sampleGenerator(index));
      } else {
        ok = writer.write(sampleGenerator(index));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}


writeStocks(streamStocks);
// csvWriter.end();

// const insertSampleStocks = () => {
//   Stocks.create(sampleGenerator())
//     .then(() => db.disconnect());
// };

// insertSampleStocks();
