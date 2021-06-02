const Facade = require('../database/mongodb/facade');
const models = require('../database/mongodb/models/index');

class UserController extends Facade {}

module.exports = new UserController(models.User);
