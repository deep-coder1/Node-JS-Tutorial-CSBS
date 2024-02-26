// GET API with MongoDB and  node js Vid 34

// API with MongoDB
// Make new file for API
// Import and use Mongo Config
// Make API for get data
// Test with Postman
// Interview Question

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    // resp.send({name:'deepak'})
    resp.send(data);
});

app.listen(5000);

// 05:54:07 Video Time End