var assert = require('chai').assert;

var supertest = require('supertest');
var status = require('http-status');

var uris = {
  heartbeat: '/heartbeat'
};

module.exports = {
  get: get
};

function get(done) {
  var server = require('../../../app/app');

  supertest(server)
    .get(uris.heartbeat)
    .expect(status.OK)
    .end(function(err, res) {
      assert.ifError(err);

      return done();
    })
    ;
}
