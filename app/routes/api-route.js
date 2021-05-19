const Router = require('express').Router;
const { config } = require('../../config');
const { getMiddlewares } = require('../utils/get-middlewares');

const router = Router();

router.get('/health/', getMiddlewares(config.middlewares.health));

module.exports = router;
