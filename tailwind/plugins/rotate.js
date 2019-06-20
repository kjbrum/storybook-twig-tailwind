// Rotate
//----------------------------

const _ = require('lodash')

module.exports = function({ addUtilities, e, config }) {
  const rotates = config('theme.rotate', {})
  const variants = config('variants.rotate', [])

  addUtilities(_.map(rotates, (degree) => ({
    [`.rotate-${e(degree)}`]: {
      transform: `rotate(${degree}deg)`
    }
  })), variants)
}
