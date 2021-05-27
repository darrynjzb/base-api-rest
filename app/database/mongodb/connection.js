const mongoose = require('mongoose');
const { config } = require('../../../config');

let instance = null;

module.exports = async () => {
  if (instance) {
    return instance;
  }
  const host = config.database.mongodb.host;
  const collection = config.database.mongodb.collection;
  try {
    instance = await mongoose.connect(`${host}/${collection}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`\x1b[32m === Mongodb connected ===`);
    return instance;
  } catch (e) {
    console.log(`\x1b[31m xxx Error trying to connect to mongodb: ${e.message} xxx`);
    process.exit(1);
  }
}
