var assert = require('chai').assert;

var supertest = require('supertest');
var status = require('http-status');

var uris = {
  root: '/'
};

module.exports = {
  get: get,
  getWithExpressBunyanLogging: getWithExpressBunyanLogging
};

function get(done) {
  var server = require('../../../app/app');

  supertest(server)
    .get(uris.root)
    .expect(status.OK)
    .end(function(err, res) {
      assert.ifError(err);

      return done();
    })
    ;
}

function getWithExpressBunyanLogging(done) {
  var testLogLevel = 'info';
  var testLogFormat = 'dev';

  var envVars = {
    bunyanLogLevel: 'BUNYAN_LOGLEVEL',
    expressLogFormat: 'EXPRESS_LOG_FORMAT'
  };

  process.env[envVars.bunyanLogLevel] = testLogLevel;
  process.env[envVars.expressLogFormat] = testLogFormat;

  var server = require('../../../app/app');

  supertest(server)
    .get(uris.root)
    .expect(status.OK)
    .end(function(err, res) {
      assert.ifError(err);

      return done();
    })
    ;
}
