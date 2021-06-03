const Router = require('express').Router;
const { config } = require('../../config');
const { getMiddlewares } = require('../utils/get-middlewares');

const router = Router();

router.post('/users/', getMiddlewares(config.middlewares.users.create));
router.get('/users/:id', getMiddlewares(config.middlewares.users.getById));

module.exports = router;
