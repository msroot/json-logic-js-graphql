import _ from 'lodash'
import jsonLogic from 'json-logic-js'
import moment from 'moment'
import { lodashOperators } from './operators.js'
moment().format()

lodashOperators.forEach((name) => jsonLogic.add_operation(`_${name}`, _[name]))

jsonLogic.add_operation('_getDate', (date) => {
  return moment(date).toISOString()
})

jsonLogic.add_operation('_gteDate', (a, b) => {
  return moment(a[1]).diff(a[0], b[1]) >= b[0]
})
jsonLogic.add_operation('_gtDate', (a, b) => {
  return moment(a[1]).diff(a[0], b[1]) > b[0]
})

jsonLogic.add_operation('_lteDate', (a, b) => {
  return moment(a[1]).diff(a[0], b[1]) <= b[0]
})

jsonLogic.add_operation('_ltDate', (a, b) => {
  return moment(a[1]).diff(a[0], b[1]) < b[0]
})

jsonLogic.add_operation('_eqDate', (a, b) => {
  return moment(a[1]).diff(a[0], b[1]) === b[0]
})

export { jsonLogic }
 