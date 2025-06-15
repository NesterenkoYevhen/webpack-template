const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  performance: {
    hints: false,
  },

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },
}
