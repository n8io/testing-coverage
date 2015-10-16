var rootController = require('../../controllers/root');

var rootHandler = function(){};

rootHandler.get = get;

module.exports = rootHandler;

function get(req, res) {
  var data = rootController.get();

  return res
    .status(200)
    .json(data)
    ;
}