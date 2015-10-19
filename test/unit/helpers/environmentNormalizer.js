var expect = require('chai').expect;

var environmentNormalizer = require('../../../app/helpers/environmentNormalizer');

module.exports = {
  loc: loc,
  local: local,
  dev: dev,
  development: development,
  ci: ci,
  qa: qa,
  prod: prod,
  production: production,
  caseInsensitive: caseInsensitive,
  notValid: notValid,
  emptyString: emptyString
};

function loc(done) {
  var env = environmentNormalizer('loc');

  expect(env).to.equal('local');

  return done();
}

function local(done) {
  var env = environmentNormalizer('local');

  expect(env).to.equal('local');

  return done();
}

function dev(done) {
  var env = environmentNormalizer('dev');

  expect(env).to.equal('dev');

  return done();
}

function development(done) {
  var env = environmentNormalizer('development');

  expect(env).to.equal('dev');

  return done();
}

function ci(done) {
  var env = environmentNormalizer('ci');

  expect(env).to.equal('dev');

  return done();
}

function qa(done) {
  var env = environmentNormalizer('qa');

  expect(env).to.equal('qa');

  return done();
}

function prod(done) {
  var env = environmentNormalizer('prod');

  expect(env).to.equal('prod');

  return done();
}

function production(done) {
  var env = environmentNormalizer('production');

  expect(env).to.equal('prod');

  return done();
}

function caseInsensitive(done) {
  var env = environmentNormalizer('PRODUCTION');

  expect(env).to.equal('prod');

  return done();
}

function notValid(done) {
  var env = environmentNormalizer('NOT_VALID');

  expect(env).to.equal('prod');

  return done();
}

function emptyString(done) {
  var env = environmentNormalizer('');

  expect(env).to.equal('prod');

  return done();
}