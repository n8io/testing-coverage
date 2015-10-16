var express = require('express');

var app = express();

var port = process.env.PORT || 4102;
var host = process.env.HOST || process.env.IP || '0.0.0.0';

require('./routes')(app);

var server = app.listen(port, host, function() {
  console.log('App listening on http://%s:%s on Node %s',
    server.address().address,
    server.address().port,
    process.version
  );
});

module.exports = server;