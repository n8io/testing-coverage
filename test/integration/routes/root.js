var assert = require('chai').assert;

var supertest = require('supertest');
var status = require('http-status');

var uris = {
  root: '/'
};

module.exports = {
  get: get
};

function get(done) {
  var server = require('../../../app/app');

  supertest(server)
    .get(uris.root)
    .expect(status.OK)
    .end(function(err, res) {
      assert.ifError(err);

      return done();
    })
    ;
}
