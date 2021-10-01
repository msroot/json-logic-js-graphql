'use strict'

var _chai = require('chai')

var _index = require('./index.js')

var _mocha = require('mocha')

;(0, _mocha.describe)('Moment operators', function () {
  ;(0, _mocha.describe)('Dates', function () {
    ;(0, _mocha.it)('_gteDate', function () {
      var rules = {
        _gteDate: [
          [
            {
              var: 'from',
            },
            {
              var: 'to',
            },
          ],
          [364, 'days'],
        ],
      }
      var data = {
        from: '2020-10-01',
        to: '2021-10-01',
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(rules, data)).to.be.equal(true)
    })
    ;(0, _mocha.it)('_gtDate', function () {
      var rules = {
        _lteDate: [
          [
            {
              var: 'from',
            },
            {
              var: 'to',
            },
          ],
          [364, 'days'],
        ],
      }
      var data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(rules, data)).to.be.equal(true)
    })
    ;(0, _mocha.it)('_lteDate', function () {
      var rules = {
        _lteDate: [
          [
            {
              var: 'from',
            },
            {
              var: 'to',
            },
          ],
          [364, 'days'],
        ],
      }
      var data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(rules, data)).to.be.equal(true)
    })
    ;(0, _mocha.it)('_ltDate', function () {
      var rules = {
        _ltDate: [
          [
            {
              var: 'from',
            },
            {
              var: 'to',
            },
          ],
          [364, 'days'],
        ],
      }
      var data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(rules, data)).to.be.equal(true)
    })
    ;(0, _mocha.it)('_eqDate', function () {
      var rules = {
        _eqDate: [
          [
            {
              var: 'from',
            },
            {
              var: 'to',
            },
          ],
          [1, 'days'],
        ],
      }
      var data = {
        from: '2020-10-01',
        to: '2020-10-02',
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(rules, data)).to.be.equal(true)
    })
  })
})
;(0, _mocha.describe)('Lodash operators', function () {
  ;(0, _mocha.describe)('Arrays', function () {})
  ;(0, _mocha.describe)('Collection', function () {})
  ;(0, _mocha.describe)('Date', function () {})
  ;(0, _mocha.describe)('Function', function () {})
  ;(0, _mocha.describe)('Lang', function () {
    ;(0, _mocha.it)('isEqual', function () {
      var logicTrue = {
        _isEqual: [
          [2, 3],
          [2, 3],
        ],
      }
      var logicFalse = {
        _isEqual: [
          [2, 3],
          [2, 4],
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logicTrue)).to.be.equal(true)
      ;(0, _chai.expect)(_index.jsonLogic.apply(logicFalse)).to.be.equal(false)
    })
  })
  ;(0, _mocha.describe)('Math', function () {
    ;(0, _mocha.it)('add', function () {
      var logic = {
        _add: [2, 3],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(5)
    })
    ;(0, _mocha.it)('ceil', function () {
      var logic = {
        _ceil: [4.006],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(5)
    })
    ;(0, _mocha.it)('divide', function () {
      var logic = {
        _divide: [6, 3],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(2)
    })
    ;(0, _mocha.it)('floor', function () {
      var logic = {
        _floor: [4.906],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(4)
    })
    ;(0, _mocha.it)('max', function () {
      var logic = {
        _max: [[2, 5, 6, 3]],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(6)
    })
    ;(0, _mocha.it)('maxBy', function () {
      var data = [
        {
          n: 4,
        },
        {
          n: 2,
        },
        {
          n: 8,
        },
        {
          n: 6,
        },
      ]
      var logic1 = {
        _maxBy: [
          {
            var: '',
          },
          'n',
        ],
      }
      var logic2 = {
        _maxBy: [
          {
            var: '',
          },
          {
            _property: 'n',
          },
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic1, data)).to.be.equal(
        data[2]
      )
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic2, data)).to.be.equal(
        data[2]
      )
    })
    ;(0, _mocha.it)('mean', function () {
      var logic = {
        _mean: [[2, 5, 6, 3]],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(4)
    })
    ;(0, _mocha.it)('meanBy', function () {
      var data = [
        {
          n: 4,
        },
        {
          n: 2,
        },
        {
          n: 8,
        },
        {
          n: 6,
        },
      ]
      var logic1 = {
        _meanBy: [
          {
            var: '',
          },
          'n',
        ],
      }
      var logic2 = {
        _meanBy: [
          {
            var: '',
          },
          {
            _property: 'n',
          },
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic1, data)).to.be.equal(5)
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic2, data)).to.be.equal(5)
    })
    ;(0, _mocha.it)('min', function () {
      var logic = {
        _min: [[2, 5, 6, 3]],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(2)
    })
    ;(0, _mocha.it)('minBy', function () {
      var data = [
        {
          n: 4,
        },
        {
          n: 2,
        },
        {
          n: 8,
        },
        {
          n: 6,
        },
      ]
      var logic1 = {
        _minBy: [
          {
            var: '',
          },
          'n',
        ],
      }
      var logic2 = {
        _minBy: [
          {
            var: '',
          },
          {
            _property: 'n',
          },
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic1, data)).to.be.equal(
        data[1]
      )
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic2, data)).to.be.equal(
        data[1]
      )
    })
    ;(0, _mocha.it)('multiply', function () {
      var logic = {
        _multiply: [2, 3],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(6)
    })
    ;(0, _mocha.it)('round', function () {
      var logic1 = {
        _round: [4.006],
      }
      var logic2 = {
        _round: [4.906],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic1)).to.be.equal(4)
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic2)).to.be.equal(5)
    })
    ;(0, _mocha.it)('multiply', function () {
      var logic = {
        _multiply: [2, 3],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(6)
    })
    ;(0, _mocha.it)('subtract', function () {
      var logic = {
        _subtract: [2, 3],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(-1)
    })
    ;(0, _mocha.it)('sum', function () {
      var logic = {
        _sum: [[2, 3]],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic)).to.be.equal(5)
    })
    ;(0, _mocha.it)('sumBy', function () {
      var data = [
        {
          n: 4,
        },
        {
          n: 2,
        },
        {
          n: 8,
        },
        {
          n: 6,
        },
      ]
      var logic1 = {
        _sumBy: [
          {
            var: '',
          },
          'n',
        ],
      }
      var logic2 = {
        _sumBy: [
          {
            var: '',
          },
          {
            _property: 'n',
          },
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic1, data)).to.be.equal(20)
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic2, data)).to.be.equal(20)
    })
  })
  ;(0, _mocha.describe)('Number', function () {})
  ;(0, _mocha.describe)('Object', function () {})
  ;(0, _mocha.describe)('String', function () {})
  ;(0, _mocha.describe)('Util', function () {
    ;(0, _mocha.it)('property', function () {
      var data = [
        {
          a: {
            b: 2,
          },
        },
        {
          a: {
            b: 1,
          },
        },
      ]
      var logic = {
        _sumBy: [
          {
            var: '',
          },
          {
            _property: 'a.b',
          },
        ],
      }
      ;(0, _chai.expect)(_index.jsonLogic.apply(logic, data)).to.be.equal(3)
    })
  })
})
