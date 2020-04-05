const moduleB = require('./b.js');
console.log(moduleB);
import('./a.js').then(val=>{
    console.log(val);
})

