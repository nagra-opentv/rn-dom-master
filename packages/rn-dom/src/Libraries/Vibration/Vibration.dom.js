/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 * @jsdoc
 */

'use strict';

import NativeVibration from './NativeVibration';
const Platform = require('../Utilities/Platform');

/**
 * Vibration API
 *
 * See https://facebook.github.io/react-native/docs/vibration.html
 */

let _vibrating: boolean = false;
let _id: number = 0; // _id is necessary to prevent race condition.
const _default_vibration_length = 400;

function vibrateByPattern(pattern: Array<number>, repeat: boolean = false) {
  if (_vibrating) {
    return;
  }
  _vibrating = true;
  if (pattern[0] === 0) {
    NativeVibration.vibrate(_default_vibration_length);
    pattern = pattern.slice(1);
  }
  if (pattern.length === 0) {
    _vibrating = false;
    return;
  }
  setTimeout(() => vibrateScheduler(++_id, pattern, repeat, 1), pattern[0]);
}

function vibrateScheduler(
  id,
  pattern: Array<number>,
  repeat: boolean,
  nextIndex: number,
) {
  if (!_vibrating || id !== _id) {
    return;
  }
  NativeVibration.vibrate(_default_vibration_length);
  if (nextIndex >= pattern.length) {
    if (repeat) {
      nextIndex = 0;
    } else {
      _vibrating = false;
      return;
    }
  }
  setTimeout(
    () => vibrateScheduler(id, pattern, repeat, nextIndex + 1),
    pattern[nextIndex],
  );
}

const Vibration = {
  /**
   * Trigger a vibration with specified `pattern`.
   *
   * See https://facebook.github.io/react-native/docs/vibration.html#vibrate
   */
  vibrate: function(
    pattern: number | Array<number> = _default_vibration_length,
    repeat: boolean = false,
  ) {
    if (Platform.OS === 'android' || Platform.OS === 'dom') {
      if (typeof pattern === 'number') {
        NativeVibration.vibrate(pattern);
      } else if (Array.isArray(pattern)) {
        NativeVibration.vibrateByPattern(pattern, repeat ? 0 : -1);
      } else {
        throw new Error('Vibration pattern should be a number or array');
      }
    } else {
      if (_vibrating) {
        return;
      }
      if (typeof pattern === 'number') {
        NativeVibration.vibrate(pattern);
      } else if (Array.isArray(pattern)) {
        vibrateByPattern(pattern, repeat);
      } else {
        throw new Error('Vibration pattern should be a number or array');
      }
    }
  },
  /**
   * Stop vibration
   *
   * See https://facebook.github.io/react-native/docs/vibration.html#cancel
   */
  cancel: function() {
    if (Platform.OS === 'ios') {
      _vibrating = false;
    } else {
      NativeVibration.cancel();
    }
  },
};

module.exports = Vibration;
