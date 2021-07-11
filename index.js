module.exports = Nanobounce

function Nanobounce (timeout) {
  timeout = timeout || 256

  var callback = null
  var last = null
  var inFlight = false

  return function (cb) {
    callback = cb
    last = Date.now()

    if (!inFlight) {
      inFlight = true
      setTimeout(next, timeout)
    }

    function next () {
      var diff = Date.now() - last
      if (diff > timeout) {
        var callbackTemp = callback
        inFlight = false
        last = null
        callback = null
        callbackTemp()
      } else {
        setTimeout(next, diff)
      }
    }
  }
}
