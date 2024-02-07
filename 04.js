var x = '20';
const arr=[2,4,7,1,3,6,8,5];
console.log(arr);
console.log("0 Index", arr[0]);

arr.filter((item)=>{
    console.log(item);
})

// O/P: 
// PS E:\Study\Node Tut> node .\04.js
// [
//   2, 4, 7, 1,
//   3, 6, 8, 5
// ]
// 0 Index 2
// 2
// 4
// 7
// 1
// 3
// 6
// 8
// 5

let result = arr.filter((item)=>{
    // console.log(item === 3);
    return item===3;
})
console.warn("Only 3 ===: ", result);

// O/P:
// Only 3 ===:  [ 3 ]

let result2 = arr.filter((item)=>{
    // console.log(item === 3);
    return item>=4;
})
console.warn("Only >=4 : ", result);

// O/P:
// Only >=4 :  [ 3 ]

// O/P: 
// PS E:\Study\Node Tut> node .\04.js
// [
//   2, 4, 7, 1,
//   3, 6, 8, 5
// ]
// 2

// 05.js import data
// import {a} from './05'

const app = require('./05')
console.log(app);
console.log(app.a);
console.log(app.b);
console.log(app.c());

// O/P: 
// PS E:\Study\Node Tut> node .\04.js
// [
//   2, 4, 7, 1,
//   3, 6, 8, 5
// ]
// 2
// { a: 10, b: 20, c: [Function: c] }
// 10
// 20
// 30
