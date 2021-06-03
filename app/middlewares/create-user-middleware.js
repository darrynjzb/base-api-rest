const controller = require('../controllers/user-controller');
const { BadRequestError } = require('../utils/common-errors');
const { setResponseWithOk } = require('../utils/common-response');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'create-user-middleware.js';

module.exports.createUserMiddleware = async (req, res, next) => {
  const methodName = 'createUserMiddleware';
  try {
    logger({
      level: 'info',
      moduleName: MODULE_NAME,
      methodName,
      description: `trying to create user with data: ${maskSensitiveData(req.body)}`
    });
    await controller.create(req.body);
    return setResponseWithOk(res, 201, 'user created successfully');
  } catch (e) {
    // TODO: mapeo y handleo de errores
    logger({
      level: 'error',
      moduleName: MODULE_NAME,
      methodName,
      description: `error trying to create user: ${maskSensitiveData(e)}`
    });
    return next(new BadRequestError('ERROR_CREATE_USER', 'error trying to create user'));
  }
};
