var rootController = function(){};

rootController.get = get;

module.exports = rootController;

function get() {
  return { message: 'OK' };
}