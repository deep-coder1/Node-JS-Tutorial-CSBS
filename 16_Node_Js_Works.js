// Node js Works Ex 16.

// 1. Call Stack
// 2. Node API
// 3. CallBack Queue
// 4. Example
// 5. Interview Questions

// Node Process:
// Call Stack 
// Node APIs
// Callback Queue

console.log("Starting Up");

setTimeout(()=>{
    console.log("2 Second log");
},200);

setTimeout(()=>{
    console.log("0 Second log");
},0);

console.log("Finshing Up");

// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\16_Node_Js_Works.js
// Starting Up
// Finshing Up
// 0 Second log
// 2 Second log

// 02:50:32 Video Time End
