// Make a simple API

// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     // resp.write({name:'Deepak Thakur', email:'deepak@demo.com'});
//     resp.write(JSON.stringify({name:'Deepak Thakur', email:'deepak@demo.com'}));
//     resp.end();
// }).listen(5000);

// Data come from 10_Data.js file
const http = require('http');
const data = require('./10_Data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    // resp.write({name:'Deepak Thakur', email:'deepak@demo.com'});
    // resp.write(JSON.stringify({name:'Deepak Thakur', email:'deepak@demo.com'}));
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);

// resp.writeHead(200,{'Content-Type':'application\json'});
// 200 Ok
// 201 Created
// 404 Not found
// 500 Server Error

// Output:- 
// nodemon 10_SimpleAPI.js 
// In postman GET: http://localhost:5000/
// response:
// [
//     {
//         "name": "Deepak Thakur",
//         "email": "deepak@demo.com",
//         "contact": "1111"
//     },
//     {
//         "name": "Sandeep Thakur",
//         "email": "sandeep@demo.com",
//         "contact": "2222"
//     },
//     {
//         "name": "Puja Thakur",
//         "email": "puja@demo.com",
//         "contact": "3333"
//     }
// ]

// Status: 200 OK

// 01:43:20 Vid Time End