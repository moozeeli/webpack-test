/**
 * 创建 className 为 header的 p 标签，
 * 并追加到 root元素
 *
 */

import createNodeUtil from "../createNodeUtil";
import style  from "./style.scss";

// console.log(createP);
// console.log(createP);
// console.log(createNodeUtil);

export  function Header(callback) {
    let header = createNodeUtil.createP("this is Header",style.header);    
    let root = document.querySelector("#root");
    root.appendChild(header);
    return header;
}
