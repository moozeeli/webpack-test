const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('../dist'),
  },
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:["style-Loader","css-loader"]
      }
    ],
  },
  plugins:[
    new htmlWebpackPlugin()
  ]
};