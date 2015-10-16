var path = require('path');

var routesRelativePath = '../routes';

var routes = [
  { '/': path.join(__dirname, routesRelativePath, 'root') },
  { '/heartbeat': path.join(__dirname, routesRelativePath, 'heartbeat') }
];

module.exports = {
  get: get
};

function get(){
  return routes;
}