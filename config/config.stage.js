const middlewares = require('./middlewares/default-middleware');

module.exports = {
  middlewares,
  server: {
    port: Number(process.env.NODE_CONFIG_SERVER_PORT)
  },
  api: {
    name: process.env.NODE_CONFIG_API_NAME,
    version: process.env.NODE_CONFIG_API_VERSION
  }
};
