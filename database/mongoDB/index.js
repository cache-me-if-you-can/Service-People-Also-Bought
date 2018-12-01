const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1/robinhoodDB';
const db = mongoose.connect(mongoUri);

module.exports = db;
