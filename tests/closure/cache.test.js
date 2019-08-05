import { cacheTest } from '@/closure/cache.js'

test('cacheTest', () => {
  function mult() {
    let a = 1
    for (let i = 0; i < arguments.length; i++) {
      a *= arguments[i]
    }
    return a
  }

  function sum() {
    let a = 0
    for (let i = 0; i < arguments.length; i++) {
      a += arguments[i]
    }
    return a
  }

  expect(cacheTest(mult, 1, 2, 3)).toBe(6)
  expect(cacheTest(mult, 1, 2, 3)).toBe('6 is already calculated')

  expect(cacheTest(sum, 1, 10, 100)).toBe(111)
  expect(cacheTest(sum, 1, 10, 100)).toBe('111 is already calculated')
})