// Post API with Mongoose

// Make cinfig file for MongoDB
// Make Post Route
// Get data from the postman and save in DB
// Interview Question

const express = require('express');
require('./config40');
const Product = require('./product40');

const app = express();
app.use(express.json());

app.post("/create", async (req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
    // console.log(req.body);
    // resp.send("Done");
})

app.listen(5000);

// O/P:-

// Terminal:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\40_Post_API_with_Mongoose.js
// {
//   name: 'Samsung A15',
//   price: 18000,
//   brand: 'samsung',
//   category: 'mobile',
//   _id: new ObjectId('65df62290b68f365d3cad49c'),
//   __v: 0
// }

// Postman: POST:
// http://localhost:5000/create

// Postman Post -> Body --> raw --> json
// {
//     "name": "Samsung A15",
//     "price": 18000,
//     "brand": "samsung",
//     "category": "mobile"
// }

// Response Body:
// {
//     "name": "Samsung A15",
//     "price": 18000,
//     "brand": "samsung",
//     "category": "mobile",
//     "_id": "65df62290b68f365d3cad49c",
//     "__v": 0
// }

// 07:06:01 Video Time End