const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const Stocks = require('../database/Stocks');
// const db = require('../database/index');

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
