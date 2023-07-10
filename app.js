/* eslint-disable global-require */
(() => {
  const express = require('express');
  const morgan = require('morgan');

  const app = express();
  return (() => {
    app.use(express.json());
    app.use(morgan('dev'));

    module.exports = app;
  })();
})();
