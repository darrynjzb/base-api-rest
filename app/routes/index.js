const express = require('express');

const router = express.Router();
const fs = require('fs');

fs.readdirSync(__dirname).forEach((route) => {
  if (route.includes('index.js') || route.includes('spec.js')) {
    return;
  }
  route = route.split('.')[0];
  router.use('', require(`./${route}.js`));
});

module.exports = router;
