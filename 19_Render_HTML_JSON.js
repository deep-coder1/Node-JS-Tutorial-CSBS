// Render HTML and JSON

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('<h1>Hello this is Home Page</h1> <a href="/about" >About Page</a>');
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="User Name:" value="${req.query.name}" />
    <button>Click Me</button>
    <a href="/" >Go to Home Page</a>
    `);

    // http://localhost:5000/about?name=Deepak
    // Deepak
//  Click Me Go to Home Page
})

app.get('/help',(req,res)=>{
    res.send([
        {
            name: 'Deepak',
            email: 'deepak@demo.com'
        },
        {
            name: 'Sandeep',
            email: 'sandeep@demo.com'
        },
        {
            name: 'Puja',
            email: 'puja@demo.com'
        }
    ]);
})

app.listen(5000);

// 03:14:56 Video Time End