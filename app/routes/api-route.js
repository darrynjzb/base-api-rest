const Router = require('express').Router;
const { config } = require('../../config');
const { getMiddlewares } = require('../utils/get-middlewares');

const router = Router();

router.post('/users/', getMiddlewares(config.middlewares.users.create));

module.exports = router;
