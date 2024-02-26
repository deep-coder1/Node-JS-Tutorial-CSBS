// POST API method  with node js and MongoDB 35

// Node js Post API method
// Mke Post methos for APi
// Send data from postman
// Get data in node js by request
// Write code for insert data in MongoDB
// Interview Question

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    // resp.send({name:'deepak'})
    resp.send(data);
});

app.post('/', async (req,resp) =>{
    // console.log(req.body);
    // resp.send({name:'deepak'});
    // resp.send({name:'deepak'});
    // resp.send(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    resp.send(result);
})

app.listen(5000);

// Terminal
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node '.\35_POST_API_Node js_MongoDB.js'

// In postman
// POST Method
// http://localhost:5000/
// {
//     "name": "max 3",
//     "brand": "apple",
//     "price": 340,
//     "category": "mobile"
// }

// body
// {
//     "acknowledged": true,
//     "insertedId": "65db39e5d5da6ac5b5d91a20"
// }

// Inserted data in mongo db

// 06:06:59 Video Time End