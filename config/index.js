const fs = require('fs');

let config = null;

const getConfiguration = () => {
  const env = process.env.NODE_ENV;
  if (!fs.existsSync(`${__dirname}/config.${env}.js`)) {
    throw new Error(`the config file ${__dirname}/config.${env}.js was not found, set correctly the env variable NODE_ENV`);
  }
  config = require(`./config.${env}`);
  config.env = env;
  return Object.freeze(config);
};

module.exports.config = getConfiguration();