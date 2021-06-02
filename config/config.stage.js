const middlewares = require('./middlewares/default-middleware');

module.exports = {
  middlewares,
  server: {
    port: Number(process.env.NODE_CONFIG_SERVER_PORT)
  },
  api: {
    name: process.env.NODE_CONFIG_API_NAME,
    version: process.env.NODE_CONFIG_API_VERSION,
    blacklistMask: process.env.NODE_CONFIG_API_BLACKLIST_MASK
  },
  database: {
    driver: process.env.DATABASE_DRIVER,
    mongodb: {
      host: process.env.MONGODB_HOST,
      databaseName: process.env.MONGODB_DATABASE_NAME,
    }
  }
};
