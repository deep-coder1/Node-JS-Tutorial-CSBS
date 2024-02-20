// Middleware node js 24

// What are Middlewares
// How to make a middleware
// Apply Middleware on routes
// Types of middleware
// Interview Question

const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
    console.log('reqFilter');
    if(!req.query.age)
    {
        resp.send("Please provide your age");
    }
    else if(req.query.age<18)
    {
        resp.send("You can not access this page");
    }
    else
    {
        next();
    }
    // next();
}

app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page')
})

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users Page');
})

app.listen(5000);


// O/P:
// http://localhost:5000/
// Please provide your age

// http://localhost:5000/?age=10
// You can not access this page

// http://localhost:5000/?age=19
// Welcome to Home Page


// http://localhost:5000/users
// Please provide your age

// http://localhost:5000/users/?age=16
// You can not access this page

// http://localhost:5000/users/?age=18
// Welcome to Users Page



// Middleware Types

// Application-level-middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

// 03:58:26 Video Time End