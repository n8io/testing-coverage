var expect = require('chai').expect;

var rootHandler = require('../../../app/routes/root/root');
var spec = function(){};

spec.get = get;

module.exports = spec;

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
