const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '..', './build'),
    },
  },
  devtool: 'cheap-module-source-map',

  plugins: [new ReactRefreshWebpackPlugin()],
}
