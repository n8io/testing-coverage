var express = require('express');

var app = express();

var config = require('./config/config');
var logger = require('./helpers/logger')();
var port = config.get('PORT');
var host = config.get('HOST');
var server;

require('./middleware')(app);
require('./routes')(app);

server = app.listen(port, host, function() {
  logger.info('%s:@%s listening on http://%s:%s on Node %s',
    config.get('app:name'),
    config.get('app:version.semver'),
    server.address().address,
    server.address().port,
    process.version
  );
});

module.exports = server;