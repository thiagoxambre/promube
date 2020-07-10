/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const passport = require('passport');

module.exports = (app) => {
  fs.readdirSync(__dirname)
    .filter((file) => (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    ))
    .forEach((file) => {
      // eslint-disable-next-line import/no-dynamic-require
      const route = require(path.join(__dirname, file));
      app.use('/api', passport.authenticate('jwt', { session : false }), route);
    });
  // Public routes
  app.use('/', require('./public/login'));

  return app;
};