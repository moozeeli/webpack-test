/**
 * 此文件用于测试export 的使用
 * @file
 * */
// export default 3.14;
const PAI = 3.14;
const PAI2 = 3.15;
export { PAI };
export { PAI2 }; // export 可以导出多次
export const PAI3 = 3.16; // 导出的变量必须有声明;

const p1 = 111;
const p2 = 222;
const p3 = 333;

// 还可以一起导出
export {p1,p2,p3}; // 这样导出是列表

/* export 和export default 可以同时使用 */
export default { PAI, PAI2, PAI3 }; // 这样导出是一个对象

/* 
const PAI4 = 3.16;
export PAI4; // 不能直接导出变量
 */