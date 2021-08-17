const path = require('path');
module.exports = {
  mode:'development',
  entry: {
    main:'./src/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode:'production',
  // optimization:{
  //   usedExports: true,
  // } 
  module:{
    rules:[{
      test:/.css/,
      use:['style-loader','css-loader']
    }]
  }
};