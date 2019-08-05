export default function () {

  Function.prototype.before = function (beforefn) {
    let self = this
    return function () {
      beforefn.apply(this, arguments)
      return self.apply(this, arguments)
    }
  }

  Function.prototype.after = function (afterfn) {
    let self = this
    return function () {
      let ret = self.apply(this, arguments)
      afterfn.apply(this, arguments)
      return ret
    }
  }

}