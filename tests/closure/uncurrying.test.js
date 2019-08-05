import uncurry from '@/closure/uncurrying.js'
uncurry()

test('currying', () => {
  let push = Array.prototype.push.uncurrying()
  let arr = []
  let obj = {}
  push(arr, 1)
  push(obj, 1)
  expect(arr).toEqual([1])
  expect(obj).toEqual({ "0": 1, length: 1 })
})