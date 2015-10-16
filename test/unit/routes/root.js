var expect = require('chai').expect;

var rootHandler = require('../../../app/routes/root/root');

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

  rootHandler.get(req, res);

  return done();
}
