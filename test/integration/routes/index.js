var rootSpec = require('./root');
var heartbeatSpec = require('./heartbeat');

module.exports = function() {
  describe("root.get()", function() {
    it("should return a 200 OK", rootSpec.get);
  });
  describe("heartbeat.get()", function() {
    it("should return a 200 OK", heartbeatSpec.get);
  });
};
