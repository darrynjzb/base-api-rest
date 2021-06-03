const { BadRequestError } = require('../utils/common-errors');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'check-length-user-id-middleware.js';

module.exports.checkLengthUserIdMiddleware = (req, res, next) => {
  const id = req.params.id;
  if (id.length < 24) {
    logger({
      level: 'info',
      moduleName: MODULE_NAME,
      methodName: 'checkLengthUserIdMiddleware',
      description: `lenxght of id value incorrect: ${maskSensitiveData(req.params)}`
    });
    throw new BadRequestError('ERROR_LENGTH_ID', 'invalid length id');
  }
  return next();
};
