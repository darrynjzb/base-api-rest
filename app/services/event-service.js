const socketConnection = require('../events/socket-connection');

const emit = (eventName, data) => {
  const socket = socketConnection();
  return socket.emit(eventName, data);
};

module.exports = {
  emit
};
