const controller = require('../controllers/user-controller');
const { BadRequestError, NotFoundError } = require('../utils/common-errors');
const { setResponseWithOk } = require('../utils/common-response');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'delete-user-by-id-middleware.js';

module.exports.deleteUserByIdMiddleware = async (req, res, next) => {
  const methodName = 'deleteUserByIdMiddleware';
  try {
    const args = { _id: req.params.id };
    logger({
      level: 'info',
      moduleName: MODULE_NAME,
      methodName,
      description: `trying to delete user with data: ${maskSensitiveData(args)}`
    });
    const user = await controller.remove(args);
    if (!user.value) {
      return next(new NotFoundError('USER_NOT_FOUND', 'the user not exist'));
    }
    return setResponseWithOk(res, 200, 'user deleted successfully');
  } catch (e) {
    // TODO: mapeo y handleo de errores
    logger({
      level: 'error',
      moduleName: MODULE_NAME,
      methodName,
      description: `error trying to delete user: ${maskSensitiveData(e)}`
    });
    return next(new BadRequestError('ERROR_DELETE_USER', 'error trying to delete user'));
  }
};
