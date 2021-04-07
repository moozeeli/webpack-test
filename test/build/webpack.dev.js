const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig,{
  mode:'development',
  devServer:{
    contentBase: path.join(__dirname, '../dist'),
  },
});



module.exports = devConfig;