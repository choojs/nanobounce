module.exports = Microbounce

function Microbounce (timeout) {
  timeout = timeout || 256

  var callback = null
  var last = null
  var inFlight = false

  return function (cb) {
    callback = cb
    last = Date.now()

    if (!inFlight) {
      inFlight = true
      window.setTimeout(next, timeout)
    }

    function next () {
      var diff = Date.now() - last
      if (diff > timeout) {
        last = null
        inFlight = false
        callback()
        callback = null
      } else {
        window.setTimeout(next, diff)
      }
    }
  }
}
