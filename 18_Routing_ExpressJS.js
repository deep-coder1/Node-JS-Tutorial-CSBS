// Routing with Express JS

// Response      Request
// Server        Client

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // console.log("Data sent by browswer: ", req.query)
    // http://localhost:5000/?name=Deepak
    // ta sent by browswer:  { name: 'Deepak' }

    console.log("Data sent by browswer =>> ", req.query.name)
    http://localhost:5000/?name=Deepak
//     PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\18_Routing_ExpressJS.js
// Data sent by browswer =>>  Deepak
    res.send('Welcome: ' + req.query.name);
    // http://localhost:5000/?name=Deepak
    // Welcome: Deepak
})

app.get('/about',(req,res)=>{
    res.send('Hello this is About Page');
})

app.get('/help',(req,res)=>{
    res.send('Welcome this is Help Page');
})

app.listen(5000);

// 03:08:22 Video Time End