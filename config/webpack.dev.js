const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../example/src/app.js'),
  output: {
    path: path.join(__dirname, '../example/src/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    port: 2000
  }
}

module.exports = merge(commonConfig, devConfig)
