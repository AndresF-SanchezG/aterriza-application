const express = require('express');
const hotelesDecameronRouter = require('./hotelesDecameron.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/hoteles-decameron', hotelesDecameronRouter);
}

module.exports = routerApi;
