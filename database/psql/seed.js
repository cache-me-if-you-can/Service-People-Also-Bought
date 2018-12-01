const faker = require('faker');
const fs = require('fs');
// const db = require('./index.js');
// const Stocks = require('./Stocks.js');
// const Transactions = require('./Transactions.js');

// const streamStocks = fs.createWriteStream('../stocks.csv');
const streamTransactions = fs.createWriteStream('../transactions.csv');

const generateRandomStockPrice = () => (Math.random() * 999).toFixed(2);

const generateRandomRating = () => (Math.random() * 99).toFixed(0);

const generateRandomPriceChange = () => (Math.random() * 8).toFixed(2);

const buyOrSell = () => {
  const arr = ['buy', 'sell'];
  return arr[Math.round(Math.random())];
};

const stocksGenerator = (index) => {
  const obj = {};
  obj.id = index;
  obj.name = faker.company.companyName().split(',').join('');
  obj.name = obj.name.split('-').join(' ');
  obj.rating = generateRandomRating();
  obj.ratingBlurb = `${obj.rating} % of analysts agree this stock is a ${buyOrSell()}`;
  obj.price = generateRandomStockPrice();
  obj.priceChange = generateRandomPriceChange();
  const record = `${obj.id},${obj.name},${obj.rating},${obj.ratingBlurb},${obj.price},${obj.priceChange}\n`;
  if (index === 1000000 || index === 2000000
    || index === 3000000 || index === 4000000
    || index === 5000000 || index === 6000000
    || index === 7000000 || index === 8000000
    || index === 9000000 || index === 10000000) {
    console.log(index);
  }
  return record;
};

function GetIndex() {
  this.index = 1;
  return this.index;
}

GetIndex.prototype.increaseIndex = function () {
  this.index += 1;
  return this.index;
};
const newIndex = new GetIndex();

const transactionGenerator = (index) => {
  const transQty = faker.random.number({ min: 4, max: 12 });
  let transactions = '';
  for (let i = 1; i <= transQty; i += 1) {
    const transId = newIndex.index;
    const stockId = index;
    const buyerId = faker.random.number({ min: 1, max: 100 });
    transactions += `${transId},${stockId},${buyerId}\n`;
    if (index === 1000000 || index === 2000000
      || index === 3000000 || index === 4000000
      || index === 5000000 || index === 6000000
      || index === 7000000 || index === 8000000
      || index === 9000000 || index === 10000000) {
      console.log(index);
    }
    newIndex.increaseIndex();
  }
  return transactions;
};

function writeCSV(writer, callback) {
  let i = 10e6;
  let index = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        writer.write(callback(index));
      } else {
        ok = writer.write(callback(index));
        index += 1;
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}


// writeCSV(streamStocks, stocksGenerator);
writeCSV(streamTransactions, transactionGenerator);

// const insertSampleStocks = () => {
//   Stocks.create(sampleGenerator())
//     .then(() => db.disconnect());
// };

// insertSampleStocks();
