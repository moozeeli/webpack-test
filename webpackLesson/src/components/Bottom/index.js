import CreateP from "../CreateP.js";
import style from "./style.scss";

/**
 * 创建 className 为 header的 p 标签，
 * 并追加到 root元素
 */ 
console.log("style", style);

export  function Bottom() {
    let p = CreateP("this is bottom",'bottom');    
    p.classList.add(style.bottom)
    let root = document.querySelector("#root");
    root.appendChild(p);    
}
