const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Client } = require('pg');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));


const PGUSER = 'emely';
const PGDATABASE = 'robinhoodpsql';

const client = new Client({
  user: PGUSER,
  host: 'localhost',
  database: PGDATABASE,
  password: '',
});

client.connect();

app.get('/api/alsoBought/:id', (req, res) => {
  client.query(`SELECT * from transactions WHERE stock_id = ${req.params.id}`, (firstError, result) => {
    if (firstError) { res.status(500).send(firstError); } else {
      const users = [];
      result.rows.map((transaction) => {
        users.push(transaction.user_buy_id);
      });
      client.query(`SELECT stock_id FROM transactions WHERE user_buy_id IN (${users.join(', ')}) LIMIT 20`, (secondError, stocksResult) => {
        if (secondError) { res.status(500).send(secondError); } else {
          const stocks = [];
          stocksResult.rows.map((stock) => {
            if (!stocks.includes(stock.stock_id) && stocks.length < 12) {
              stocks.push(stock.stock_id);
            }
          });
          client.query(`SELECT * FROM stocks WHERE id IN (${stocks.join(', ')})`, (thirdError, relatedStocks) => {
            if (thirdError) { res.status(500).send(thirdError); } else {
              res.status(200).send(relatedStocks.rows);
            }
          });
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log('Server running on port...', PORT);
});
