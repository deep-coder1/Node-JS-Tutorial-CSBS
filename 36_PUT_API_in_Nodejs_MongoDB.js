// PUT API in node js and mongo DB 36

// Make PUT method for API
// Send data from postman
// Handle data in node js by request
// Write Code for update data in MongoDB
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

// app.put('/', async (req, resp) =>{
    // if we change name through pass url
app.put('/:name', async (req, resp) =>{
    // console.log(req.body);
    let data = await dbConnect();
    let result = data.updateOne(
        // {name: "max 3"},
        // {$set:{price:345}}

        // {name: req.body.name},

        // if we change name through pass url
        {name: req.params.name},
        {$set:req.body}
    )
    resp.send({result:"updated"});
})

app.listen(5000);

// 06:18:13 Video Time End