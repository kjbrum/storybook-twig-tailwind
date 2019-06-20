// Flexbox - Order
//----------------------------

const _ = require('lodash')

const defaultOptions = {
  prefix: 'order',
  range: _.range(-6, 6)
}
const defaultVariants = ['responsive']

module.exports = function({ addUtilities, e, config }) {
  // const options = _.defaults(config('theme.flexOrder'), defaultOptions)
  // const variants = config('variants.flexOrder', defaultVariants)

  addUtilities([
    ...options.range.map(value => {
      let prefix = options.prefix
      let key = Math.abs(value)

      // Add dash to prefix if negative value
      if ( _.lt(value, 0) ) prefix = `-${prefix}`

      return {
        [`.${e(prefix)}-${e(key)}`]: {
          order: value,
        }
      };
    }),
  ], variants)
}
