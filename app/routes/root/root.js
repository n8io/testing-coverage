var rootController = require('../../controllers/root');

module.exports = {
  get: get
};

function get(req, res) {
  var data = rootController.get();

  return res
    .status(200)
    .json(data)
    ;
}