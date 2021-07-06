const { config } = require('../../config');

let instance;

const getConnection = (appExpress) => {
  try {
    if (instance) {
      return instance;
    }
    const port = config.events.socket.port;
    const server = require('http').createServer(appExpress);
    const io = require('socket.io')(server, {
      cors: {
        origin: '*',
      }
    });
    instance = io.on('connection', (socket) => {
      return socket;
    });
    server.listen(port);
    console.log(`\x1b[32m === Socket connected ===`);
    return instance;
  } catch (e) {
    console.log(`\x1b[31m xxx Error trying to connect to socket: ${e.message}`);
    process.exit(1);
  }
};

module.exports = (appExpress) => {
  return getConnection(appExpress);
};
