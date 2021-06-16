const middlewares = require('./default/array-of-middlewares');

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
    drivers: process.env.DATABASE_DRIVERS,
    mongodb: {
      host: process.env.MONGODB_HOST,
      databaseName: process.env.MONGODB_DATABASE_NAME,
    },
    redis: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
      ttl: Number(process.env.REDIS_TTL)
    }
  }
};
