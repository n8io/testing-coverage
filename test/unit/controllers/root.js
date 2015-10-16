var expect = require('chai').expect;

var controller = require('../../../app/controllers/root');

module.exports= {
  get: get
};

function get(done) {
  var data = controller.get();

  expect(data).to.be.an('object');
  expect(data).to.have.property('message');
  expect(data.message).to.equal('OK');

  return done();
}