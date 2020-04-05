function print(obj){
    return console.log(obj)
}
function printTag({
    color="white",
    title="",
    bg="#ccc",
    value="printTag",    
}) {
    return console.log(title + '%c%s', `background-color:${bg};color:${color};padding:0 4px;border-radius:2px`,value);
}

export { print,printTag }