'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

exports['default'] = (0, _underscore.reduce)(Object.keys(_underscore2['default']), function (h, k) {
  return _extends({}, h, _defineProperty({}, k, (0, _underscore.wrap)(_underscore2['default'][k], function (f) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return f.apply(undefined, [this].concat(args));
  })));
}, {});
module.exports = exports['default'];
