const Redis = require('ioredis');
const { config } = require('../../../config');

let instance;

const getConnection = () => {
  try {
    if (instance) {
      return instance;
    }
    const connObj = config.database.redis;
    instance = new Redis(connObj);
    console.log(`\x1b[32m === Redis connected ===`);
    return instance;
  } catch (e) {
    console.log(`\x1b[31m xxx Error trying to connect to redis: ${e.message}`);
    process.exit(1);
  }
};

const initConnection = () => {
  getConnection();
  instance.on('connect', () => {
    console.debug(`\x1b[32m === Redis connection OK ===`);
  });
  instance.on('error', (err) => {
    console.error(`\x1b[32m === Error connection redis: ${err.message} ===`);
  });
  instance.on('ready', () => {
    console.debug(`\x1b[32m === Redis ready ===`);
  });
};

module.exports = {
  initConnection,
  getConnection
};
