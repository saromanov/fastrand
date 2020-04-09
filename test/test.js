var assert = require('assert');
var fastRnd = require('../src');

  describe('checking', function() {
    it("should start", function() {
      var fast = fastRnd.FastRand(0x123abc,10);
      assert.equal(cr.pattern, undefined);
    });
  });
