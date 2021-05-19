module.exports.healthCheckMiddleware = (req, res, next) => {
  return res.status(200).send({ code: 'OK', message: 'api up and running' });
};
