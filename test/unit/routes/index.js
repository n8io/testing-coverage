var rootSpec = require('./root');
var heartbeatSpec = require('./heartbeat');

module.exports = function() {
  describe("GET /", function() {
    it("should call res.status(200).json({message: 'OK'})", rootSpec.get);
  });
  describe("GET /hearbeat", function() {
    it("should call res.status(200).json({message: 'OK'})", heartbeatSpec.get);
  });
};
