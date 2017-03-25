const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base');
const path = require('path');

const publicPath = '/dist/';

module.exports = function () {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    output: {
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map'
    },
    devServer: {
      contentBase: path.join(__dirname, '..', 'dist'),
      port: 9000,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      staticOptions: { redirect: false },
      proxy: {
        "/api": "http://localhost:3000"
      },
      publicPath: publicPath
    }
  })
};
