const webpackMerge = require('webpack-merge');
const { resolve } = require('path')
const webpack = require('webpack')
const commonConfig = require('./webpack.base');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, '../public'),
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('prod')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  })
}
