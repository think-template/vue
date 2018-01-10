const path = require('path')
module.exports = {
  plugins: {
    'postcss-import': {
      path: [path.resolve('../fesrc')],
    },
    'postcss-mixins': {},
    'postcss-cssnext': {},
    'postcss-nested': {},
    // 'postcss-url': {},
  },
}