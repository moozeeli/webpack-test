import _ from "lodash";
import "./style.css";
import logo from './logo.jpg'
function component() {
    var element = document.createElement('div');    
    element.setAttribute("id","app");
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = logo;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());