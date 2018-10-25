const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/RobinhoodFEC';
const db = mongoose.connect(mongoUri);

module.exports = db;
