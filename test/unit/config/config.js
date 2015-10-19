var expect = require('chai').expect;

module.exports = {
  loggly: loggly
};

function loggly(done) {
  process.env.LOGGLY_LOGLEVEL = 'test_loglevel';
  process.env.LOGGLY_SUBDOMAIN = 'test_subdomain';
  process.env.LOGGLY_TOKEN = 'test_token';

  var controller = require('../../../app/config/config');

  var logLevel = controller.get('LOGGLY_LOGLEVEL');
  var logSubDomain = controller.get('LOGGLY_SUBDOMAIN');
  var logToken = controller.get('LOGGLY_TOKEN');

  expect(logLevel).to.be.an('string');
  expect(logLevel).to.equal('test_loglevel');
  expect(logSubDomain).to.be.an('string');
  expect(logSubDomain).to.equal('test_subdomain');
  expect(logToken).to.be.an('string');
  expect(logToken).to.equal('test_token');

  return done();
}
