var express = require('express');
var router = express.Router();

var heartbeatHandler = require('./heartbeat/heartbeat');

router.get('/', heartbeatHandler.get);

module.exports = router;
