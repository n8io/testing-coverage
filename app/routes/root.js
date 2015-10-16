var express = require('express');
var router = express.Router();

var rootHandler = require('./root/root');

router.get('/', rootHandler.get);

module.exports = router;
