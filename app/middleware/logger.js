var logger = require('../helpers/logger')();
var expressLogger = require('morgan');
var config = require('../config/config');

module.exports = function(app) {
  var expressLogFormat = config.get('EXPRESS_LOG_FORMAT');
  var bunyanLogLevel = config.get('BUNYAN_LOGLEVEL');

  if(expressLogFormat !== 'OFF') {
    if(bunyanLogLevel !== 'OFF' && logger.info()) {
      // Use Bunyan logger
      app.use(function(req, res, next){
        // Move on to the next request immediately
        next();

        // log this request
        logger.info({
            req : req,
            production: config.get('NODE_ENV') === 'prod'
        });
      });
    }
    else {
      // Use Morgan logger
      app.use(expressLogger(expressLogFormat));
    }
  }
};
