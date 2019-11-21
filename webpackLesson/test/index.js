
module.exports = function (source) {
    // const options = getOptions(this);

    // validateOptions(schema, options, 'Example Loader');

    console.log(source);  

    // 对资源应用一些转换……

    return `export default ${JSON.stringify(source)}`;
};