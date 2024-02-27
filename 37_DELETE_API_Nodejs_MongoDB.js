// DELETE API in node js and mongo DB 37

// Make Delete method for API
// Send data from postamn
// Handle data in node js by request
// Write Code for Delete data in MongoDB
// Interview Question

const express = require('express');
const dbConnect = require('./mongodb');
const mongoDb = require('mongodb');
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

app.delete('/:id', async (req,resp) =>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)});
    // resp.send("Done");
    resp.send(result);
})

app.listen(5000);

// Terminal
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node '.\37_13 DELETE_API_Nodejs_MongoDB.js'
// 65da246eb9ce5b51bc2dca3b

// Postman:
// Delete method
// http://localhost:5000/65da246eb9ce5b51bc2dca3b

// body
// {
//     "acknowledged": true,
//     "deletedCount": 1
// }


// 06:24:17 Video Time End