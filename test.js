var assert = require('assert');

var chai = require('chai');
var chaiHttp = require('chai-http');
// var app = require('./server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('server', function () {
  describe('/napi/url', function () {
    it('responds with status 200', function (done) {
      chai.request("http://localhost:3000")
        .post('/napi/url')
        .send({
          "url": "https://www.zhihu.com/question/29775447"
        })
        // .expect(200)
        // .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) done(err);
          expect(res).to.have.status(200);
          //   res.body.should.have.property('domString');
          //   res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');

          done()
        })
    })
  })
})

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
