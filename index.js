/*!
 * Copyright (c) 2020, Zsolt R. Molnar.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function isZero(value) {
  const n = Math.abs(value);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  
  return n === 0;
};

