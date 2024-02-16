// Asynchronous Basics in Node js

// Synchronous :- In synchronous operations tasks are performed one at a time.
// Asynchronous:- In Asynchronous, second task do not wait to finish first task.

// console.log("Start exe...");

// console.log('Logic exe...');

// console.log("Complete exe...");
// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\14_Asynchronous_Basics.js
// Start exe...
// Logic exe...
// Complete exe...

// Not wait for second execution 
// console.log("Start exe...");

// setTimeout(()=>{
//     console.log('Logic exe...'); // 2 second
// },2000);

// console.log("Complete exe...");

// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\14_Asynchronous_Basics.js
// Start exe...
// Complete exe...
// Logic exe...

// Drawbacks
let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
},2000);

console.log(a+b);

// O/P:
// console first execute beacuse b = 20 take time .
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\14_Asynchronous_Basics.js
// 10

// 02:28:50 Video Time End