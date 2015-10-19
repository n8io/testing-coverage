 var validEnvironments = {
  loc: 'local',
  local: 'local',
  ci: 'dev',
  dev: 'dev',
  development: 'dev',
  qa: 'qa',
  prod: 'prod',
  production: 'prod'
};

module.exports = function(val) {
   return validEnvironments[(val || '').toLocaleLowerCase()] || validEnvironments.prod;
};