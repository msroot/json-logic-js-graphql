import { expect } from 'chai'
import { jsonLogic } from './index.js'
import { describe, it } from 'mocha'

describe('Custom operators', () => {
  describe('Custom', () => {
    it('nonZeroMin', () => {
      const logic = { _nonZeroMin: [[100, 0, 30]] }
      expect(jsonLogic.apply(logic)).to.be.equal(30)
    })
  })
})

describe('Moment operators', () => {
  describe('Dates', () => {
	  
      it('_isPastDate', () => {
        const rules = {
          _isPastDate: [
            { var: 'date' },
          ],
        }
        const data = { date: '2020-10-01' }

        expect(jsonLogic.apply(rules, data)).to.be.equal(true)
      })
	  
      it('_isFutureDate', () => {
        const rules = {
          _isFutureDate: [
            { var: 'date' },
          ],
        }
        const data = { date: '2080-10-01' }

        expect(jsonLogic.apply(rules, data)).to.be.equal(true)
      })
	  
	  
    it('_gteDate', () => {
      const rules = {
        _gteDate: [
          [{ var: 'from' }, { var: 'to' }],
          [364, 'days'],
        ],
      }
      const data = { from: '2020-10-01', to: '2021-10-01' }

      expect(jsonLogic.apply(rules, data)).to.be.equal(true)
    })

    it('_gtDate', () => {
      const rules = {
        _lteDate: [
          [{ var: 'from' }, { var: 'to' }],
          [364, 'days'],
        ],
      }
      const data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }

      expect(jsonLogic.apply(rules, data)).to.be.equal(true)
    })

    it('_lteDate', () => {
      const rules = {
        _lteDate: [
          [{ var: 'from' }, { var: 'to' }],
          [364, 'days'],
        ],
      }
      const data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }

      expect(jsonLogic.apply(rules, data)).to.be.equal(true)
    })

    it('_ltDate', () => {
      const rules = {
        _ltDate: [
          [{ var: 'from' }, { var: 'to' }],
          [364, 'days'],
        ],
      }
      const data = {
        from: '2020-10-01',
        to: '2020-11-01',
      }

      expect(jsonLogic.apply(rules, data)).to.be.equal(true)
    })

    it('_eqDate', () => {
      const rules = {
        _eqDate: [
          [{ var: 'from' }, { var: 'to' }],
          [1, 'days'],
        ],
      }
      const data = {
        from: '2020-10-01',
        to: '2020-10-02',
      }

      expect(jsonLogic.apply(rules, data)).to.be.equal(true)
    })
  })
})

describe('Lodash operators', () => {
  describe('Arrays', () => {})
  describe('Collection', () => {})
  describe('Date', () => {})
  describe('Function', () => {})
  describe('Lang', () => {
    it('isEqual', () => {
      const logicTrue = {
        _isEqual: [
          [2, 3],
          [2, 3],
        ],
      }
      const logicFalse = {
        _isEqual: [
          [2, 3],
          [2, 4],
        ],
      }
      expect(jsonLogic.apply(logicTrue)).to.be.equal(true)
      expect(jsonLogic.apply(logicFalse)).to.be.equal(false)
    })
  })
  describe('Math', () => {
    it('add', () => {
      const logic = { _add: [2, 3] }
      expect(jsonLogic.apply(logic)).to.be.equal(5)
    })
    it('ceil', () => {
      const logic = { _ceil: [4.006] }
      expect(jsonLogic.apply(logic)).to.be.equal(5)
    })
    it('divide', () => {
      const logic = { _divide: [6, 3] }
      expect(jsonLogic.apply(logic)).to.be.equal(2)
    })
    it('floor', () => {
      const logic = { _floor: [4.906] }
      expect(jsonLogic.apply(logic)).to.be.equal(4)
    })
    it('max', () => {
      const logic = { _max: [[2, 5, 6, 3]] }
      expect(jsonLogic.apply(logic)).to.be.equal(6)
    })
    it('maxBy', () => {
      const data = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
      const logic1 = { _maxBy: [{ var: '' }, 'n'] }
      const logic2 = { _maxBy: [{ var: '' }, { _property: 'n' }] }
      expect(jsonLogic.apply(logic1, data)).to.be.equal(data[2])
      expect(jsonLogic.apply(logic2, data)).to.be.equal(data[2])
    })
    it('mean', () => {
      const logic = { _mean: [[2, 5, 6, 3]] }
      expect(jsonLogic.apply(logic)).to.be.equal(4)
    })
    it('meanBy', () => {
      const data = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
      const logic1 = { _meanBy: [{ var: '' }, 'n'] }
      const logic2 = { _meanBy: [{ var: '' }, { _property: 'n' }] }
      expect(jsonLogic.apply(logic1, data)).to.be.equal(5)
      expect(jsonLogic.apply(logic2, data)).to.be.equal(5)
    })
    it('min', () => {
      const logic = { _min: [[2, 5, 6, 3]] }
      expect(jsonLogic.apply(logic)).to.be.equal(2)
    })
    it('minBy', () => {
      const data = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
      const logic1 = { _minBy: [{ var: '' }, 'n'] }
      const logic2 = { _minBy: [{ var: '' }, { _property: 'n' }] }
      expect(jsonLogic.apply(logic1, data)).to.be.equal(data[1])
      expect(jsonLogic.apply(logic2, data)).to.be.equal(data[1])
    })
    it('multiply', () => {
      const logic = { _multiply: [2, 3] }
      expect(jsonLogic.apply(logic)).to.be.equal(6)
    })
    it('round', () => {
      const logic1 = { _round: [4.006] }
      const logic2 = { _round: [4.906] }
      expect(jsonLogic.apply(logic1)).to.be.equal(4)
      expect(jsonLogic.apply(logic2)).to.be.equal(5)
    })
    it('multiply', () => {
      const logic = { _multiply: [2, 3] }
      expect(jsonLogic.apply(logic)).to.be.equal(6)
    })
    it('subtract', () => {
      const logic = { _subtract: [2, 3] }
      expect(jsonLogic.apply(logic)).to.be.equal(-1)
    })
    it('sum', () => {
      const logic = { _sum: [[2, 3]] }
      expect(jsonLogic.apply(logic)).to.be.equal(5)
    })
    it('sumBy', () => {
      const data = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
      const logic1 = { _sumBy: [{ var: '' }, 'n'] }
      const logic2 = { _sumBy: [{ var: '' }, { _property: 'n' }] }
      expect(jsonLogic.apply(logic1, data)).to.be.equal(20)
      expect(jsonLogic.apply(logic2, data)).to.be.equal(20)
    })
  })
  describe('Number', () => {})
  describe('Object', () => {})
  describe('String', () => {})
  describe('Util', () => {
    it('property', () => {
      const data = [{ a: { b: 2 } }, { a: { b: 1 } }]
      const logic = { _sumBy: [{ var: '' }, { _property: 'a.b' }] }
      expect(jsonLogic.apply(logic, data)).to.be.equal(3)
    })
  })
})
