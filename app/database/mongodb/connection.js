const mongoose = require('mongoose');
const { config } = require('../../../config');

let instance = null;

module.exports = async () => {
  if (instance) {
    return instance;
  }
  const host = config.database.mongodb.host;
  const database = config.database.mongodb.databaseName;
  try {
    mongoose.set('useCreateIndex', true);
    instance = await mongoose.connect(`${host}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`\x1b[32m === Mongodb connected ===`);
    return instance;
  } catch (e) {
    console.log(`\x1b[31m xxx Error trying to connect to mongodb: ${e.message} xxx`);
    process.exit(1);
  }
}
