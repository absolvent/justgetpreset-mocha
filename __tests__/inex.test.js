/**
 * Copyright (c) 2015-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const mocha = require('../index');
const test = require('lookly-preset-ava/test');

test('should run test files', function () {
  return mocha('../__meta_test__/*.test.js', {
    silent: true,
  });
});
