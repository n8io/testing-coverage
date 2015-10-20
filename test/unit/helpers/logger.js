var expect = require('chai').expect;
var supertest = require('supertest');

module.exports = {
  bunyan: bunyan,
  bunyanOff: bunyanOff,
  bunyanInfo: bunyanInfo,
  bunyanNotSet: bunyanNotSet,
  loggly: loggly,
  logglyNotSet: logglyNotSet,
  expressLogFormat: expressLogFormat,
  expressLoggerWithoutBunyan: expressLoggerWithoutBunyan,
  expressLoggerWithBunyan: expressLoggerWithBunyan
};

function expressLogFormat(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogFormat = 'test_logformat';
  var envVar = 'EXPRESS_LOG_FORMAT';

  process.env[envVar] = testLogFormat;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar)).to.equal(testLogFormat);

  return done();
}

function expressLoggerWithoutBunyan(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogFormat = 'test_logformat';
  var testLogLevel = 'OFF';

  var envVars = {
    expressLogFormat: 'EXPRESS_LOG_FORMAT',
    bunyanLogLevel: 'BUNYAN_LOGLEVEL'
  };

  process.env[envVars.expressLogFormat] = testLogFormat;
  process.env[envVars.bunyanLogLevel] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVars.expressLogFormat)).to.equal(testLogFormat);
  expect(config.get(envVars.bunyanLogLevel)).to.equal(testLogLevel);

  return done();
}

function expressLoggerWithBunyan(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogFormat = 'test_logformat';
  var testLogLevel = 'info';

  var envVars = {
    expressLogFormat: 'EXPRESS_LOG_FORMAT',
    bunyanLogLevel: 'BUNYAN_LOGLEVEL'
  };

  process.env[envVars.expressLogFormat] = testLogFormat;
  process.env[envVars.bunyanLogLevel] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVars.expressLogFormat)).to.equal(testLogFormat);
  expect(config.get(envVars.bunyanLogLevel)).to.equal(testLogLevel);

  return done();
}

function bunyan(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = 'error';
  var envVar = 'BUNYAN_LOGLEVEL';

  process.env[envVar] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar)).to.equal(testLogLevel);

  return done();
}

function bunyanInfo(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = 'info';
  var envVar = 'BUNYAN_LOGLEVEL';

  process.env[envVar] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar)).to.equal(testLogLevel);

  return done();
}

function bunyanOff(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = 'OFF';
  var envVar = 'BUNYAN_LOGLEVEL';

  process.env[envVar] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar)).to.equal(testLogLevel);

  return done();
}

function bunyanNotSet(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = '';
  var envVar = 'BUNYAN_LOGLEVEL';

  process.env[envVar] = testLogLevel;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar)).to.equal(testLogLevel);

  return done();
}

function loggly(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = 'test_loglevel';
  var testSubDomain = 'test_subdomain';
  var testToken = 'test_token';
  var envVar = {
    logLevel: 'LOGGLY_LOGLEVEL',
    subdomain: 'LOGGLY_SUBDOMAIN',
    token: 'LOGGLY_TOKEN'
  };

  process.env[envVar.logLevel] = testLogLevel;
  process.env[envVar.subdomain] = testSubDomain;
  process.env[envVar.token] = testToken;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar.logLevel)).to.equal(testLogLevel);
  expect(config.get(envVar.subdomain)).to.equal(testSubDomain);
  expect(config.get(envVar.token)).to.equal(testToken);

  return done();
}

function logglyNotSet(done) {
  var configRelativeFilePath = '../../../app/config/config';
  var serverRelativePath = '../../../app/app';
  var config;
  var server;

  var testLogLevel = '';
  var testSubDomain = '';
  var testToken = '';
  var envVar = {
    logLevel: 'LOGGLY_LOGLEVEL',
    subdomain: 'LOGGLY_SUBDOMAIN',
    token: 'LOGGLY_TOKEN'
  };

  process.env[envVar.logLevel] = testLogLevel;
  process.env[envVar.subdomain] = testSubDomain;
  process.env[envVar.token] = testToken;

  config = require(configRelativeFilePath);
  server = require(serverRelativePath);

  supertest(server);

  expect(config.get(envVar.logLevel)).to.equal(testLogLevel);
  expect(config.get(envVar.subdomain)).to.equal(testSubDomain);
  expect(config.get(envVar.token)).to.equal(testToken);

  return done();
}
