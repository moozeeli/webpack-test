const path = require('path');
const { optimize } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode:'production',
  // optimization:{
  //   usedExports: true,
  // } 
};