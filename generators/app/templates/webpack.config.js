var path = require('path')
var HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: [
    'babel-polyfill',
    './scripts/entry.jsx'
  ],
  externals: {
    '$': 'jQuery'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    path: './dist'
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx', '.coffee'],
    modulesDirectories: ['node_modules'],
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV),
      views: path.join(__dirname, 'scripts', 'views'),
      stores: path.join(__dirname, 'scripts', 'stores'),
      actions: path.join(__dirname, 'scripts', 'actions'),
      shared: path.join(__dirname, 'scripts', 'shared')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(svg|ico|eot|ttf|woff2?|pdf|png)$/,
        loader: 'file?name=[path][name].[ext]&context=assets'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      pkg: require('./package.json'),
      template: './dist/index.html'
    })
  ]
}
