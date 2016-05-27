/**
 * Copyright (c) 2015-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const eslint = require('lookly-preset-eslint');
const mocha = require('./index');

gulp.task('lint', function gulpLintTask() {
  return eslint('{./__meta_test__/,./__tests__/,./}*.js');
});

gulp.task('test', ['lint'], function gulpTestTask() {
  return mocha(path.resolve(__dirname, '__tests__', '**', '*.test.js'));
});
