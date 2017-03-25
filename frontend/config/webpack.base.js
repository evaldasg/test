const { resolve } = require('path')
const publicPath  = '/'

module.exports = function() {
  return {
    context: resolve(__dirname, '../src'),
    entry: './App.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../dist'),
      publicPath: publicPath
    },
    module: {
      rules: [
        { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
      ]
    }
  }
}
