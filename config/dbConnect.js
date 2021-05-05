const mongoose = require('mongoose');
const { connectionAddress, optionsDb } = require('./dbConfig');

function dbConnect () {
  mongoose.connect(connectionAddress, optionsDb, (err) => {
    if (err) console.log(`Database connection error: ${err}`);
    console.log('Connected to database')
  });
};

module.exports = dbConnect
