const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = () => {
  const envConfig = require(`./webpack.${process.env.APP_ENV}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
