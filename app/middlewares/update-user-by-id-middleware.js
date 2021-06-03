const controller = require('../controllers/user-controller');
const { BadRequestError, NotFoundError } = require('../utils/common-errors');
const { setResponseWithOk } = require('../utils/common-response');
const { logger } = require('../utils/common-logger');
const { maskSensitiveData } = require('../utils/mask');

const MODULE_NAME = 'update-user-by-id-middleware.js';

module.exports.updateUserByIdMiddleware = async (req, res, next) => {
  const methodName = 'updateUserByIdMiddleware';
  try {
    const args = { _id: req.params.id };
    logger({
      level: 'info',
      moduleName: MODULE_NAME,
      methodName,
      description: `trying to update user with data: ${maskSensitiveData(req.body)}, args ${maskSensitiveData(args)}`
    });
    const user = await controller.update(args, req.body);
    if (!user.value) {
      return next(new NotFoundError('USER_NOT_FOUND', 'the user not exist'));
    }
    return setResponseWithOk(res, 200, 'user updated successfully');
  } catch (e) {
    // TODO: mapeo y handleo de errores
    logger({
      level: 'error',
      moduleName: MODULE_NAME,
      methodName,
      description: `error trying to update user: ${maskSensitiveData(e)}`
    });
    return next(new BadRequestError('ERROR_UPDATE_USER', 'error trying to update user'));
  }
};
