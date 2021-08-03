const middlewares = require('./default/middlewares');

module.exports = {
  middlewares,
  server: {
    port: Number(process.env.NODE_CONFIG_SERVER_PORT)
  },
  api: {
    name: process.env.NODE_CONFIG_API_NAME || 'base-api',
    version: process.env.NODE_CONFIG_API_VERSION || 'v1',
    blacklistMask: process.env.NODE_CONFIG_API_BLACKLIST_MASK || 'password,document'
  },
  database: {
    drivers: process.env.DATABASE_DRIVERS || 'mongodb,redis',
    mongodb: {
      host: process.env.MONGODB_HOST || 'mongodb://localhost:27017',
      databaseName: process.env.MONGODB_DATABASE_NAME || 'project'
    },
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || 'sOmE_sEcUrE_pAsS',
      ttl: Number(process.env.REDIS_TTL) || 86400,
    }
  },
  events: {
    socket: {
      port: Number(process.env.SOCKET_PORT) || 3000
    }
  }
};
