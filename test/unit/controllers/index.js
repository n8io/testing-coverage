var rootSpec = require('./root');
var heartbeatSpec = require('./heartbeat');

module.exports = function() {
  describe("root.get()", function() {
    it("should return a proper OK object", rootSpec.get);
  });
  describe("heartbeat.get()", function() {
    it("should return a proper OK object", heartbeatSpec.get);
  });
};
