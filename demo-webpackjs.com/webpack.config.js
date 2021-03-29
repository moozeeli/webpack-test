const path = require('path');
const webpack = require('webpack');

const MyExampleWebpackPlugin = require('./webpackplugin/MyExampleWebpackPlugin');

module.exports = {
  entry: {
    'main':'./src/index.js',
    'jquery':'jquery',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  // mode:'production',
  mode:'development',
  devServer:{
    contentBase:'./dist'
  },
  devtool:'none',

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        "file-loader"
      ]
    }, {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: [
        "file-loader"
      ]
    }]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MyExampleWebpackPlugin()
  ]
};