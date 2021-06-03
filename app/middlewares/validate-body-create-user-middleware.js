const schema = require('../validators/schemas/users').createSchema;
const { BadRequestError } = require('../utils/common-errors');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'validate-body-create-user-middleware.js';

module.exports.validateBodyCreateUserMiddleware = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    logger({
      level: 'error',
      moduleName: MODULE_NAME,
      methodName: 'validateBodyCreateUserMiddleware',
      description: `error trying to validate body: ${maskSensitiveData(error.details)}`
    });
    throw new BadRequestError('INVALID_BODY', 'the body is not correct');
  }
  return next();
};
