const redisConnection = require('../database/redis/connection');

const redis = redisConnection.getConnection();

const setData = (key, value) => {
  redis.set(key, value);
};

const getData = (key, value) => {
  return redis.get(key, value);
};

const deleteData = (key) => {
  redis.del(key);
};

module.exports = {
  setData,
  getData,
  deleteData
};
