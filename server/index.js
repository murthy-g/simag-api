const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api');
// const path = require('path');

module.exports = () => {
  const app = express();
  //   if (process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() !== 'PROD') {
  //     app.use(express.static(path.join(__dirname, 'public')));
  //   }

  app.set('json spaces', 2);
  app.use(bodyParser.json({limit: process.env.PAYLOAD_SIZE}));
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  app.use('/api', apiRouter);
  return app;
};
