var heartbeatController = require('../../controllers/heartbeat');

module.exports = {
  get: get
};

function get(req, res) {
  var data = heartbeatController.get();

  return res
    .status(200)
    .json(data)
    ;
}