
/* 向js中引入css */
import indexCss from "./style/index.css";
import imgUrl from "./style/myhead.jpg"
import scssTest from "./style/common.scss";

import { Header } from "./components/Header/index";
import { Bottom } from "./components/Bottom/index";

// 这里测试自定义loader
import text from "./text.txt";
console.log(text);

Header();
Bottom();

console.log("indexCss",indexCss);

let root = document.getElementById("root");
let div = document.createElement("div");
div.innerHTML = "<p class='p'> 这是个段落 测试</p>"


var div2 = document.createElement("div");
div2.className = "bg";
div2.innerHTML = "adsfasdf";


let img = new Image();
img.src = imgUrl;
div.appendChild(img);


root.appendChild(div);
root.appendChild(div2);