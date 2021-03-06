var bunyan = require('bunyan');
var bunyan2Loggly = require('bunyan-loggly').Bunyan2Loggly;
var config = require('../config/config');

module.exports = function() {
  var streams = [];

  if(config.get('BUNYAN_LOGLEVEL') !== 'OFF') {
    streams.push({
      stream: process.stdout,
      level: config.get('BUNYAN_LOGLEVEL')
    });
  }

  if(config.get('LOGGLY_TOKEN') && config.get('LOGGLY_SUBDOMAIN')) {
    streams.push({
      type: 'raw',
      level: config.get('LOGGLY_LOGLEVEL'),
      stream: new bunyan2Loggly({
        token: config.get('LOGGLY_TOKEN'),
        subdomain: config.get('LOGGLY_SUBDOMAIN')
      })
    });
  }

  return bunyan.createLogger({
    name: config.get('app:name'),
    streams: streams,
    serializers: bunyan.stdSerializers
  });
};
