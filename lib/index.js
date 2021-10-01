'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
Object.defineProperty(exports, 'jsonLogic', {
  enumerable: true,
  get: function get() {
    return _jsonLogicJs['default']
  },
})

var _lodash = _interopRequireDefault(require('lodash'))

var _jsonLogicJs = _interopRequireDefault(require('json-logic-js'))

var _moment = _interopRequireDefault(require('moment'))

var _operators = require('./operators.js')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

;(0, _moment['default'])().format()

_operators.lodashOperators.forEach(function (name) {
  return _jsonLogicJs['default'].add_operation(
    '_'.concat(name),
    _lodash['default'][name]
  )
})

_jsonLogicJs['default'].add_operation('_getDate', function (date) {
  return (0, _moment['default'])(date).toISOString()
})

_jsonLogicJs['default'].add_operation('_gteDate', function (a, b) {
  return (0, _moment['default'])(a[1]).diff(a[0], b[1]) >= b[0]
})

_jsonLogicJs['default'].add_operation('_gtDate', function (a, b) {
  return (0, _moment['default'])(a[1]).diff(a[0], b[1]) > b[0]
})

_jsonLogicJs['default'].add_operation('_lteDate', function (a, b) {
  return (0, _moment['default'])(a[1]).diff(a[0], b[1]) <= b[0]
})

_jsonLogicJs['default'].add_operation('_ltDate', function (a, b) {
  return (0, _moment['default'])(a[1]).diff(a[0], b[1]) < b[0]
})

_jsonLogicJs['default'].add_operation('_eqDate', function (a, b) {
  return (0, _moment['default'])(a[1]).diff(a[0], b[1]) === b[0]
})
