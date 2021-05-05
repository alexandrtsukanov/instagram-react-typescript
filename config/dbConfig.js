require('dotenv').config();

const optionsDb = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 
  useCreateIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,  
};

const { DB_PORT, DB_HOST, DB_NAME } = process.env;

const connectionAddress = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = {
  optionsDb,
  connectionAddress,
}
