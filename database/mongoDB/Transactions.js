const mongoose = require('mongoose');
const random = require('mongoose-random');

mongoose.Promise = global.Promise;

const transactionSchema = new mongoose.Schema({
  stock_id: Number,
  user_buy_id: Number,
  amount: Number,
},
{
  timestamps: true,
});

transactionSchema.plugin(random, { path: 'r' });

module.exports = mongoose.model('Transactions', transactionSchema);
