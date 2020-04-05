import "./style.css";

import alittle_moudle from "./alittle_moudle.js";

var body = document.querySelector("body");
body.append("模块热替换");
body.append(document.createElement("br"));
body.append(document.createElement("hr"));

//  引入模块
// alittle_moudle();

if (module.hot) {
  module.hot.accept('./alittle_moudle.js', function () {
    console.log('Accepting the updated printMe module!');
    alittle_moudle();
  })
}