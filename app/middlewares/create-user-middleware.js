const controller = require('../controllers/user-controller');
const { BadRequestError } = require('../utils/common-errors');
const { setResponseWithOk } = require('../utils/common-response');

module.exports.createUserMiddleware = async (req, res, next) => {
  try {
    await controller.create(req.body);
    return setResponseWithOk(res, 200, 'user created successfully');
  } catch (e) {
    // TODO: mapeo y handleo de errores
    return next(new BadRequestError('USER_CREATE_ERROR', 'error trying to create user'));
  }
};
