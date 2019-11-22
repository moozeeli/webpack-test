
/* 向js中引入css */
import indexCss from "./style/index.css";
import imgUrl from "./style/myhead.jpg"
import scssTest from "./style/common.scss";

import iconfont from "./style/iconfont/iconfont.css";

import { Header } from "./components/Header/index";
import { Bottom } from "./components/Bottom/index";

Header();
Bottom();

console.warn("index.js is loaded");



console.log("indexCss",indexCss);

let root = document.getElementById("root");
let div = document.createElement("div");
div.innerHTML = "<p class='p'> 这是个段落 测试</p>"


var div2 = document.createElement("div");
div2.className = "bg";
div2.innerHTML = "<span class='iconfont iconduigou' ></span>";


let img = new Image();
img.src = imgUrl;
div.appendChild(img);


root.appendChild(div);
root.appendChild(div2);