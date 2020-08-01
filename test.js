'use strict';

require('mocha');
const assert = require('assert');
const isZero = require('./');

describe('isZero', function() {
  it('should return true if the number is zero:', function() {
    assert(isZero(0));
    assert(!isZero(1));
    assert(!isZero(-1));
    assert(!isZero(1.0e0));
    assert(!isZero(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(isZero('0'));
    assert(!isZero('2'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isZero(), /expected a number/);
    assert.throws(() => isZero('foo'), /expected a number/);
  });
});
