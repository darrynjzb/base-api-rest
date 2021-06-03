const Joi = require('joi');

const createSchema = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  document: Joi.string().required(),
  email: Joi.string().email().required(),
  birthdate: Joi.date().required(),
  status: Joi.string().valid('active', 'inactive').optional()
});

module.exports = {
  createSchema
};
