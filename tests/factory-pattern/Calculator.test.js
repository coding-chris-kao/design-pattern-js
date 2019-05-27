import Calculator from '@/factory-pattern/Calculator.js'

describe('Calculator', () => {
  test('Calculator.add()', () => {
    let expected = 8
    let instance = Calculator.factory('add')
    let actual = instance.compute(3, 5)
    expect(actual).toBe(expected)
  })
})