const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { resolve } = require('path')
const publicPath  = '/'

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = function() {
  return {
    context: resolve(__dirname, '../src'),
    entry: './MainApp.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../dist'),
      publicPath: publicPath
    },
    module: {
      rules: [
        { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [
        extractSass
    ],
    resolve: {
      extensions: [".js", ".json", ".scss"],
      modules: ["node_modules"]
    }
  }
}
