const { camelCase } = require('lodash');

// TODO: hacer que la busqueda de middlewares sea recursiva
const getMiddlewares = (middlewareNames) => {
  const arrayOfMiddleware = [];
  try {
    middlewareNames.forEach((name) => {
      const middleware = require(`./../middlewares/${name}`)[camelCase(name)];
      arrayOfMiddleware.push(middleware);
    });
    return arrayOfMiddleware;
  } catch (e) {
    throw e;
  }
}

module.exports.getMiddlewares = getMiddlewares;
