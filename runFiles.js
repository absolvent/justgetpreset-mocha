/**
 * Copyright (c) 2015-present, goreutils
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var Promise = require('bluebird');
var Mocha = require('mocha');
var glob = require('glob');

function noop() {
}

function onFileListReady(fileList, isSilent) {
  var mocha = new Mocha({
    bail: true,
    reporter: isSilent ? (
      noop
    ) : (
      'list'
    )
  });

  fileList.forEach(mocha.addFile, mocha);

  return Promise.fromCallback(function (callback) {
    mocha.run(callback);
  });
}

function runFiles(filesGlobPattern, isSilent) {
  return Promise.fromCallback(function (callback) {
    glob(filesGlobPattern, callback);
  }).then(function (fileList) {
    return onFileListReady(fileList, isSilent);
  });
}

module.exports = runFiles;
