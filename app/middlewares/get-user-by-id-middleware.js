const controller = require('../controllers/user-controller');
const { BadRequestError, NotFoundError } = require('../utils/common-errors');
const { setResponseWithOk } = require('../utils/common-response');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'get-user-by-id-middleware.js';

module.exports.getUserByIdMiddleware = async (req, res, next) => {
  const methodName = 'getUserByIdMiddleware';
  try {
    const args = { _id: req.params.id };
    logger({
      level: 'info',
      moduleName: MODULE_NAME,
      methodName,
      description: `trying to get user by id with args: ${maskSensitiveData(args)}`
    });
    const user = await controller.findById(args);
    if (!user) {
      return next(new NotFoundError('ERROR_USER_NOT_FOUND', 'the user not exist'));
    }
    return setResponseWithOk(res, 200, user);
  } catch (e) {
    // TODO: mapeo y handleo de errores
    logger({
      level: 'error',
      moduleName: MODULE_NAME,
      methodName,
      description: `error trying to create user with data: ${maskSensitiveData(e)}`
    });
    return next(new BadRequestError('ERROR_GET_BY_ID_USER', 'error trying to get user by id'));
  }
};
