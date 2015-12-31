/**
 * Copyright (c) 2015-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const Promise = require('bluebird');
const Mocha = require('mocha');
const glob = require('glob');

function noop() {
}

function onFileListReady(fileList, isSilent) {
  const mocha = new Mocha({
    bail: true,
    reporter: isSilent ? (
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

function runFiles(filesGlobPattern, isSilent) {
  return Promise.fromCallback(function globPromiseCallback(callback) {
    glob(filesGlobPattern, callback);
  }).then(function fileListPromiseHandle(fileList) {
    return onFileListReady(fileList, isSilent);
  });
}

module.exports = runFiles;
