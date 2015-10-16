var heartbeatController = function(){};

heartbeatController.get = get;

module.exports = heartbeatController;

function get() {
  return { message: 'OK' };
}