/**
 * Copyright (c) 2015-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const eslintRunFiles = require('gore-eslint/runFiles');
const runFiles = require('./runFiles');

gulp.task('lint', function gulpLintTask() {
  return eslintRunFiles('./*.js');
});

gulp.task('test', ['lint'], function gulpTestTask() {
  return runFiles(path.resolve(__dirname, '__tests__', '**', '*.test.js'));
});
