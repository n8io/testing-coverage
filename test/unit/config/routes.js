var expect = require('chai').expect;

var controller = require('../../../app/config/routes');

module.exports = {
  get: get
};

function get(done) {
  var data = controller.get();

  expect(data).to.be.an('array');
  expect(data).to.have.length.above(0);

  return done();
}
