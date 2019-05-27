function Calculator() { }

Calculator.prototype.compute = function (a, b) {
  return this.computeStrategy(a, b)
}

Calculator.factory = function (type) {
  let constr = type

  if (typeof Calculator[constr] !== 'function') {
    throw {
      name: "Error",
      message: constr + "doesn't exist"
    }
  }

  if (typeof Calculator[constr].prototype.compute !== 'function') {
    Calculator[constr].prototype = new Calculator()
  }

  return new Calculator[constr]()
}

Calculator.add = function () {
  this.computeStrategy = function (a, b) {
    return a + b
  }
}

export default Calculator