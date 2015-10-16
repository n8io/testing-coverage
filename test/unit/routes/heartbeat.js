var expect = require('chai').expect;

var heartbeatHandler = require('../../../app/routes/heartbeat/heartbeat');

module.exports = {
  get: get
}

function get(done) {
  var req;
  var res;

  req = {};
  res = {
    json: function(obj){
      expect(obj).to.be.an('object');

      return this;
    },
    status: function(statusCode) {
      expect(statusCode).to.equal(200);

      return this;
    }
  };

  heartbeatHandler.get(req, res);

  return done();
}
