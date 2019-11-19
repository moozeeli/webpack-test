import "./style/index.css";
let root = document.getElementById("root");

let div = document.createElement("div");
div.innerHTML = "<p class='p'> 这是个段落</p>"

root.appendChild(div);