// Express JS Introduction
// Install Express
// Make Example with express js
// Interview Question

// Install Exprss 
// npm i express

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Hello this is Home Page');
})

app.get('/about',(req,res)=>{
    res.send('Hello this is About Page');
})

app.get('/help',(req,res)=>{
    res.send('Welcome this is Help Page');
})

app.listen(5000);

// 03:02:02 Video Time End