// Remove extension from URL

// Apply get method.
// Remove an extension from URL.
// Make 404 page.
// Apply 404 page.
// Interview Question.

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');
// console.log(publicPath);

// app.use(express.static(publicPath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/20_about.html`)
})

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help_20.html`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage_21.html`)
})

app.listen(5000);

// 03:30:54 Video Time End