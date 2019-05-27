import Calculator from '@/factory-pattern/Calculator.js'

describe('Calculator', () => {
  let dataSet = [
    { args: { a: 3, b: 5 }, operator: 'add', expected: 8 },
    { args: { a: 3, b: 5 }, operator: 'sub', expected: -2 },
    { args: { a: 3, b: 5 }, operator: 'mul', expected: 15 },
    { args: { a: 3, b: 5 }, operator: 'div', expected: 0.6 }
  ]
  dataSet.forEach(data => {
    test(`Expect Calculator.${data.operator}(${data.args.a}, ${data.args.b}) to be ${data.expected}`, () => {
      let instance = Calculator.factory(data.operator)
      let actual = instance.compute(data.args.a, data.args.b)
      expect(actual).toBe(data.expected)
    })
  })
})