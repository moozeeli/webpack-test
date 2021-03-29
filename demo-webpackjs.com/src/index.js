import _ from "lodash-es";
import "./style.css";
import logo from './img/logo.jpg'


import {
    cube
} from "./math";




function component() {
    var element = document.createElement('div');
    element.setAttribute("id", "app");

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');;

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = logo;
    myIcon.style.height='100px';

    var icon = document.createElement('span');
    icon.setAttribute("class", "iconfont");
    icon.innerHTML = "&#xe61c;"

    element.appendChild(icon);

    return element;
}

document.body.appendChild(component());