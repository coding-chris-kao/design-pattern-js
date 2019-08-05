export default function () {
  Function.prototype.uncurrying = function () {
    let self = this
    return function () {
      let obj = [].shift.apply(arguments)
      self.apply(obj, arguments)
    }
  }
}