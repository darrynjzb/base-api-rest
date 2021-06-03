const moment = require('moment');
const _ = require('lodash');

const levelMap = {
  debug: 'debug',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

// TODO: hacer que escriba en un txt con path parametrizable
const logger = (dataLogger) => {
  const { moduleName, methodName, description } = dataLogger;
  const level = levelMap[dataLogger.level];
  if (!level) {
    // TODO: lanzar excepcion
  }
  const now = moment().format();
  console[level](
    `[${_.toUpper(level)}]`,
    `[${now}]`,
    `[${_.toUpper(moduleName)}]`,
    `[${_.toUpper(methodName)}]`,
    `=> ${description}`
  );
};

module.exports = {
  logger
};
