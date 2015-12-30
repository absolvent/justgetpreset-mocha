/**
 * Copyright (c) 2015-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var gulp = require('gulp');
var path = require('path');
var runFiles = require('./runFiles');

gulp.task('test', function () {
  return runFiles(path.resolve(__dirname, '__tests__', '**', '*.test.js'));
});
