var async = require('async');
var _ = require('lodash');

var routesConfig = require('../config/routes').get();

module.exports = function(app) {
  async.each(routesConfig, function(route, callback){
    var pathname = _.keys(route)[0];
    app.use(pathname, require(route[pathname]));
    callback();
  });
};