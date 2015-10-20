var rootSpec = require('./root');
var heartbeatSpec = require('./heartbeat');

module.exports = function() {
  describe("root.get()", function() {
    beforeEach(function(done){
      var configRelativeFilePath = '../../../app/config/config';
      var serverRelativePath = '../../../app/app';
      var disabledLogLevel = 'OFF';
      var disabledLogFormat = 'OFF';

      var envVars = {
        bunyanLogLevel: 'BUNYAN_LOGLEVEL',
        expressLogFormat: 'EXPRESS_LOG_FORMAT'
      };

      process.env[envVars.bunyanLogLevel] = disabledLogLevel;
      process.env[envVars.expressLogFormat] = disabledLogFormat;

      // Wipe require cache so as to reload config and server
      delete require.cache[require.resolve(configRelativeFilePath)]
      delete require.cache[require.resolve(serverRelativePath)];

      return done();
    });

    it("should return a 200 OK", rootSpec.get);
    it("should return a 200 OK and log it via Bunyan", rootSpec.getWithExpressBunyanLogging);
  });
  describe("heartbeat.get()", function() {
    beforeEach(function(done){
      var configRelativeFilePath = '../../../app/config/config';
      var serverRelativePath = '../../../app/app';
      var disabledLogLevel = 'OFF';
      var disabledLogFormat = 'OFF';

      var envVars = {
        bunyanLogLevel: 'BUNYAN_LOGLEVEL',
        expressLogFormat: 'EXPRESS_LOG_FORMAT'
      };

      process.env[envVars.bunyanLogLevel] = disabledLogLevel;
      process.env[envVars.expressLogFormat] = disabledLogFormat;

      // Wipe require cache so as to reload config and server
      delete require.cache[require.resolve(configRelativeFilePath)]
      delete require.cache[require.resolve(serverRelativePath)];

      return done();
    });

    it("should return a 200 OK", heartbeatSpec.get);
  });
};
