// Template Engine 22

// What is the template engine?
// Install ejs template package.
// Setup dynamic routing
// Make dynamic Page.
// Interview Question.

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,resp)=>{
    // resp.sendFile(`${publicPath}/index.html`)
    const user = {
        name: 'Deepak Thakur',
        email: 'deepak@demo.com',
        city: 'Bagodar'
    }
    resp.render('profile',{user});
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

// 03:38:50 Video Time End