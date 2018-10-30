const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../database/index');
const Stocks = require('../database/Stocks.js')

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api', (req, res) => {
  // Stocks.aggregate([{ $sample: {size: 9}}]).then(function (res) {
  //   console.log(res);
  // })
  console.log('hi')
  console.log('Stocks.find:  ',Stocks.find);
  Stocks.find((error, results) => {
    
    if (error) {
      console.log('error')
      res.status(500).send(error);
    }
      console.log('ajoiwejfioawoijf');

      res.status(200).send(results);
  
  });
})

app.listen(PORT, () => {
});
