import aop from '@/closure/aop.js'
aop()

test('aop', () => {
  let arr1 = []
  function func(arr) {
    arr.push('main')
    return arr
  }
  func = func.before(function (arr) {
    arr.push('before')
  }).after(function (arr) {
    arr.push('after')
  })
  expect(func(arr1)).toEqual(['before', 'main', 'after'])
})