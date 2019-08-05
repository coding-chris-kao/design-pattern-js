import currying from '@/closure/currying.js'

test('currying', () => {
  let cost = (function () {
    let money = 0
    return function () {
      for (let i = 0; i < arguments.length; i++) {
        money += arguments[i]
      }
      return money
    }
  })()
  cost = currying(cost)
  expect(cost(100)).toEqual([100])
  expect(cost(200)).toEqual([100, 200])
  expect(cost(300)).toEqual([100, 200, 300])
  expect(cost()).toBe(600)
})