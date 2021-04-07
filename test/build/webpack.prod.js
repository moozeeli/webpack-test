

const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {
  mode:'production'
} 

module.exports = merge(baseConfig,config)
