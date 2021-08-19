const path = require('path');
module.exports = {
  mode:'production',
  devtool:'source-map',
  entry: {
    main:'./src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // pathinfo:false
  },
  // optimization: {
  //     providedExports:false,
  //     sideEffects:true,
  //   // usedExports: true, // 标记被使用的导出内容
  //   // minimize: false,    // 不压缩代码
  //     runtimeChunk: {
  //       name: 'runtime'   // runtime 打包成独立js
  //     }
  // },
  // module:{
  //   rules:[{
  //     test:/\.css$/,
  //     use:[ 'style-loader', 'css-loader' ]
  //   }]
  // }
};