// Container
//----------------------------

module.exports = function({ addComponents, config }) {
  addComponents({
    '.container': {
      width: '100%',
      maxWidth: config('theme.screens.xl'),
      margin: '0 auto',
      padding: '0 1rem',
    }
  })
}
