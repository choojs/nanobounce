# microbounce [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Smol debounce package.

## Usage
```js
var Microbounce = reuqire('microbounce')
var html = require('bel')

var microbounce = Microbounce()
html`
  <input onkeydown=${onkeydown}>click me</button>
`
function onkeydown (e) {
  var value = e.target.value
  microbounce(function () {
    console.log('called at the start of a new frame', value)
  })
}
```

## Why?
Because most debounce functions don't work well when doing DOM diffing. This
package is specifically made to work well with DOM diffing.

## API
### `microbounce = Microbounce([timeout])`
Create a new instance. Timeout defaults to `256ms`.

### `microbounce(callback)`
Debounce a callback for the duration of the timeout. The last callback wins if
called multiple times in a row.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/microbounce.svg?style=flat-square
[3]: https://npmjs.org/package/microbounce
[4]: https://img.shields.io/travis/yoshuawuyts/microbounce/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/microbounce
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/microbounce/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/microbounce
[8]: http://img.shields.io/npm/dm/microbounce.svg?style=flat-square
[9]: https://npmjs.org/package/microbounce
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
