var assert = require('assert');
var fastRnd = require('../src');

  describe('checking', function() {
    it("should start", function() {
      var fast = fastRnd.New(0x123abc,10);
      assert.equal(fast, 2);
      var fast = fastRnd.New(0x123abc,1);
      assert.equal(fast, 0);
      var fast = fastRnd.New(0x623abc,17);
      assert.equal(fast, 9);
    });
  });
