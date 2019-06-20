// Screen Reader
//----------------------------

module.exports = function({ addUtilities }) {
  addUtilities({
    '.screen-reader': {
      overflow: 'hidden !important',
      position: 'absolute !important',
      width: '1px !important',
      height: '1px !important',
      margin: '0 !important',
      padding: '0 !important',
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
    },

    '.skip-to-content': {
      overflow: 'hidden !important',
      position: 'absolute !important',
      width: '1px !important',
      height: '1px !important',
      margin: '0 !important',
      padding: '0 !important',
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',

      '&:active, &:focus, &:hover': {
        width: 'auto !important',
        height: 'auto !important',
        overflow: 'visible !important',
        clip: 'auto !important',
      }
    }
  });
}
