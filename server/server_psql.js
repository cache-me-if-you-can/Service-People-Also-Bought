require('newrelic');
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
const PGDATABASE = 'postgres';

const client = new Client({
  user: PGUSER,
  host: 'ec2-52-10-15-224.us-west-2.compute.amazonaws.com',
  database: PGDATABASE,
  password: 'HR123$',
  port: 5432,
});

client.connect();

app.get('/api/alsobought/:id', (req, res) => {
  const stockQuery = `SELECT * 
  FROM stocks
  WHERE id IN (
    SELECT DISTINCT t.stock_id
    FROM transactions t
    WHERE user_buy_id IN (
      SELECT user_buy_id 
      FROM transactions 
      WHERE stock_id = ${req.params.id}
    ) LIMIT 12
  )`;

  client.query(stockQuery, (thirdError, relatedStocks) => {
    if (thirdError) { res.status(500).send(thirdError); } else {
      res.status(200).send(relatedStocks.rows);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server running on port...', PORT);
});
