// Route Level Middleware

// Route Level Middleware
// Apply Middleware on single Route
// Make middleware in different file
// Apply middleware in the group of route
// Interview Question

const express = require('express');
const reqFilter = require('./25_middleware2');
const app = express();
const route = express.Router();

// --> Move this code in 25_middleware2.js file
// const reqFilter=(req,resp,next)=>{
//     // console.log('reqFilter');
//     if(!req.query.age)
//     {
//         resp.send("Please provide your age");
//     }
//     else if(req.query.age<18)
//     {
//         resp.send("You can not access this page, your age is less tahn 18");
//     }
//     else
//     {
//         next();
//     }
//     // next();
// }

// app.use(reqFilter);

route.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page')
})

app.get('/users', (req,resp)=>{
    resp.send('Welcome to Users Page');
})

route.get('/about', (req,resp)=>{
    resp.send('Welcome to About Page');
})

route.get('/contact', (req,resp)=>{
    resp.send('Welcome to Contact Page');
});

app.use('/',route);

app.listen(5000);

// O/P:

// http://localhost:5000/
// Welcome to Home Page

// http://localhost:5000/about/
// Please provide your age

// http://localhost:5000/about/?age=17
// You can not access this page, you are age is less tahn 18

// http://localhost:5000/about/?age=18
// Welcome to About Page

// About and contact are same 

// 04:9:5 Video Time End