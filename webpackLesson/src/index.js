
/* 向js中引入css */
import css from "./style/index.css";
import imgUrl from "./style/myhead.jpg"
import scssTest from "./style/common.scss";
console.log(css);
console.log(css.toString());
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