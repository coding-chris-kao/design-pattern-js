const cacheTest = (function () {
  let cache = {}
  return function () {
    let func = [].shift.call(arguments)
    let args = [].slice.call(arguments)
    let key = Array.prototype.join.call(args, ',')
    if (key in cache) {
      return cache[key] + ' is already calculated'
    } else {
      return cache[key] = func.apply(this, arguments)
    }
  }
})()

export { cacheTest }