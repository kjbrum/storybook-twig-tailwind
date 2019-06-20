// Blend Modes
//----------------------------

const _ = require('lodash');

const defaultBlendModes = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity'
];

let defaultOptions = {
  mix: {
    prefix: 'blend',
    modes: defaultBlendModes
  },
  background: {
    prefix: 'bg-blend',
    modes: defaultBlendModes
  },
  variants: []
};

module.exports = function(options = {}) {
  options = _.defaults(options, defaultOptions);

  return function({ addUtilities, e }) {
    addUtilities([
      // Mix
      ...options.mix.modes.map(value => ({
        [`.${e(options.mix.prefix)}-${e(value)}`]: {
            mixBlendMode: value,
        }
      })),

      // Background
      ...options.background.modes.map(value => ({
        [`.${e(options.background.prefix)}-${e(value)}`]: {
            backgroundBlendMode: value,
        }
      })),
    ], options.variants);
  }
}
