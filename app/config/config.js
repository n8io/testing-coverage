var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var cfg = require('nconf');

var envKeys = require(path.join(__dirname, '../.environment'));
var envNormalizer = require(path.join(__dirname, '../helpers/environmentNormalizer'));
var commitFile = path.join(__dirname, '../../.git.json');
var packageJson = path.join(__dirname, '../../package.json');


var envSettings = parseEnvironmentVars(envKeys);

var version = '0.0.0';

cfg.use('memory');

cfg.env(envSettings.env);

cfg.set('pkgJson', JSON.parse(fs.readFileSync(packageJson, 'utf-8')));
cfg.set('app:version:semver', cfg.get('pkgJson:version'));
cfg.set('app:name', cfg.get('pkgJson:name'));

cfg.set('NODE_ENV', envNormalizer(process.env.NODE_ENV));
cfg.set('app:version:major', cfg.get('app:version:semver').split('.')[0]);
cfg.set('app:version:minor', cfg.get('app:version:semver').split('.')[1]);
cfg.set('app:version:revision', cfg.get('app:version:semver').split('.')[2]);

cfg.defaults(envSettings.defaults);

module.exports = cfg;

// Parse the envionments array and give me a workable object back
function parseEnvironmentVars(keys) {
  var data = {
    env: [],
    defaults: {}
  };

  _.each(keys, function(key) {
    var name = key;

    if(typeof key === 'object') {
      name = _.keys(key)[0];
      data.defaults[name] = _.values(key)[0];
    }

    data.env.push(name);
  });

  return data;
}
