const schema = require('../validators/schemas/users').createSchema;
const { BadRequestError } = require('../utils/common-errors');

module.exports.validateBodyCreateUserMiddleware = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    throw new BadRequestError('USER_ERROR_BODY', 'the body is not correct');
  }
  return next();
};
