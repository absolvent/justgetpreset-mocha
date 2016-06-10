/**
 * Copyright (c) 2015-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const Promise = require('bluebird');
const Mocha = require('mocha');
const glob = require('ultra-glob');

function noop() {
}

function onFileListReady(fileList, config) {
  const mocha = new Mocha({
    bail: true,
    reporter: config.silent ? (
      noop
    ) : (
      'list'
    ),
  });

  fileList.forEach(mocha.addFile, mocha);

  return Promise.fromCallback(function mochaPromiseCallback(callback) {
    mocha.run(callback);
  });
}

function runFiles(filesGlobPattern, config) {
  return glob(filesGlobPattern).then(fileList => onFileListReady(fileList, config));
}

module.exports = runFiles;
