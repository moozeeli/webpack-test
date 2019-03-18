### demo-webpackjs.com目录说明 
2019年3月18日

根据 webpack 中文网站指南搭建配置webpack
https://www.webpackjs.com

1. npm init -y 
2. 安装 webpack 依赖
```
npm  i webpack webpack-cli -D
```
3. 创建src/index.js 及 dist/index.html
4. dist/index.html 中引入 ./src/index.js
5. npm install --save lodash // 用户生成环境，没有使用--save-dev

6. 在 src/index.js 中 import lodash;
7. 执行 npx webpack ,如果无法正常执行， 先执行 npm i npm -g 进行npm的升级

### 进行配置
8. 新建 webpack.config.js文件
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
9. 执行 npx webpack --config webpack.config.js

### 配置 npm script
10. 在package.json中做如下修改：
```
"scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
```
11. 执行 npm run build