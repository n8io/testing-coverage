var configRoutesSpec = require('./routes');

module.exports = function() {
  describe('routes()', function() {
    it('should return an array of routes with length > 0', configRoutesSpec.get)
  });
};
