const fs = require('fs');
const _ = require('lodash');

const models = {};

fs.readdirSync(__dirname).forEach((file) => {
  if (file === 'index.js') {
    return;
  }
  const fileName = _.split(file, '.')[0];
  const modelName = _.startCase(fileName);
  models[modelName] = require(`../models/${file}`);
});

module.exports = models;