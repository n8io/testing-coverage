var configRoutesSpec = require('./routes');
var configConfigSpec = require('./config');

module.exports = function() {
  describe('routes()', function() {
    it('should return an array of routes with length > 0', configRoutesSpec.get);
  });

  describe('config.env()', function() {
    it('should return correctly set Loggly Environment variables', configConfigSpec.loggly);
  });
};