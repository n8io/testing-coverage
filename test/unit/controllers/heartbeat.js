var expect = require('chai').expect;

var controller = require('../../../app/controllers/heartbeat');
var spec = function(){};

spec.get = get;

module.exports = spec;

function get(done) {
  var data = controller.get();

  expect(data).to.be.an('object');
  expect(data).to.have.property('message');
  expect(data.message).to.equal('OK');

  return done();
}
