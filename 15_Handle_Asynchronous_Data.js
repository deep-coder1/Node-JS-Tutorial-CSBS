// Handle Asynchrounous Data

let a = 20;
let b = 0;

// setTimeout(()=>{
//     b = 30;
// },2000);

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // b = 30;
        resolve(30);
    },2000);
})

// console.log(a+b);
waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})

// O/P 
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\15_Handle_Asynchronous_Data.js
// 50

// 02:35:58 Video Time End