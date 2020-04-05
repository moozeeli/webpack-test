
###  1、webpack 最基本使用。

>前提:创建项目目录，生成npm 配置文件 package.json

##### 1. 当前项目本地安装 webpack 和webpack-cli
```
npm install --save-dev webpack webpack-cli
```

##### 2.在项目跟目录下创建文件
创建
src/index.js 和dist/index.html；

index.js内容如下：
```
alert("index.js");

```

index.html内容如下：
```
<script src="main.js"></script>
```

目录结构
```
/
├─node_modules
├─package.json
├─src
|  └─ index.html
└─dist
   └─index.js  

```

##### 3.进行打包
执行以下命令
```
npx webpack
// 通过npx 可执行 当前项目的依赖包中的可执行文件，不需要全局安装依赖包
// 比如 webpack 不进行全局安装，就可通过 npx webpack 执行打包命令
```
/src路径下会生成一个main.js文件，此文件就是在index.html同过script引入的js

目录结构如下：
```
    /
    ├─node_modules
    ├─package.json
    ├─src
    |  ├─ index.html
+   |  └─ main.js
    └─dist
       └─index.js  

```

**问题**
1. 为什么不需要配置文件？
2. 在不写配置的情况下只能采用这种目录结构吗？
3. webpack 和webpack-cli 必须都安装吗？为什么？

##### 参考
[webpack起步](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85)

[目录结构的生成](https://www.jianshu.com/p/491e1968051a)

[npx 是什么？](https://www.jianshu.com/p/cee806439865)


[npm 卸载包](https://blog.csdn.net/yihanzhi/article/details/75665959)

2019年1月10日 
斡野
