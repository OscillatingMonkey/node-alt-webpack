var config = require('./webpack.config.js')
var webpack = require('webpack')

config.entry.push('webpack-dev-server/client?http://localhost:8000')
config.entry.push('webpack/hot/dev-server')

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify('development')}
  })
)

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NoErrorsPlugin())

config.devServer = {
  info: false,
  hot: true,
  inline: false,
  port: 8000,
  host: 'localhost',
  colors: true,
  progress: true,
  contentBase: 'build',
  historyApiFallback: true,
  stats: {
    colors: true,
    progress: true
  }
}

module.exports = config
