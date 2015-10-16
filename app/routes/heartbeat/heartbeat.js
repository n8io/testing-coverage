var heartbeatController = require('../../controllers/heartbeat');

var heartbeatHandler = function(){};

heartbeatHandler.get = get;

module.exports = heartbeatHandler;

function get(req, res) {
  var data = heartbeatController.get();

  return res
    .status(200)
    .json(data)
    ;
}