function currying(fn) {
  let memory = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, memory)
    } else {
      [].push.apply(memory, arguments)
      return memory
    }
  }
}

export default currying