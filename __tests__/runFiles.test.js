/**
 * Copyright (c) 2015-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var runFiles = require('../runFiles');

describe('mocha', function () {
  it('should run test files', function () {
    return runFiles('../__meta_test__/*.test.js', true);
  });
});
