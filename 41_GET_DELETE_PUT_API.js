// GET, DELETE AND PUT APIs with node js and mongoose

// Example of GET Method API
// Example of Delete Method API
// Example of PUT Method API
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

// Get API
app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})
// app.listen(5000);

// Terminal:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\41_GET_DELETE_PUT_API.js

// Postman (GET)
// localhost:5000/list
// [
//     {
//         "_id": "65d74fd317e6a1588ac49521",
//         "name": "f15",
//         "brand": "samsung",
//         "price": 220,
//         "category": "mobile"
//     },
//     {
//         "_id": "65d75bfca51ec0f3cedf4928",
//         "name": "redmi 13",
//         "brand": "mi",
//         "price": 200,
//         "category": "mobile"
//     }
// ]

// Delete API
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    // let data = await Product.deleteOne({id" "abcd"});
    let data = await Product.deleteOne(req.params);
    // resp.send("Done");
    resp.send(data);
})
// app.listen(5000);

// Terminal:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\41_GET_DELETE_PUT_API.js
// { _id: '65db247c044fe29267cd95ee' }

// Postman: (Delete)
// localhost:5000/delete/65db247c044fe29267cd95ee

// Resp Body
// {
//     "acknowledged": true,
//     "deletedCount": 0
// }


// PUT API
app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    // let data = await Product.deleteOne({id" "abcd"});
    let data = await Product.updateOne(
        // {} condition
        // {
        //     // $set updated data
        // }
        req.params,
        {
            $set:req.body
        }
    );
    // resp.send("Done");
    resp.send(data);
})

app.listen(5000);

// Terminal: 
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\41_GET_DELETE_PUT_API.js
// { _id: '65df62290b68f365d3cad49c' }

// Postman: (PUT)
// localhost:5000/update/65df62290b68f365d3cad49c

// Body -> Raw -> Json 

// Previous Value
// {
//     "name":"Samsung A15",
//     "price":18000,
//     "brand":"samsung",
//     "category":"mobile"
// }

// New updated Value
// {
//     "name":"Samsung A15",
//     "price":17500,
//     "brand":"samsung",
//     "category":"mobile"
// }

// OR New updated Value // We can write only price one value
// {
//     "price":17500,
// }

// Resp Body:
// {
//     "acknowledged": true,
//     "modifiedCount": 1,
//     "upsertedId": null,
//     "upsertedCount": 0,
//     "matchedCount": 1
// }


// 07:18:35 Video Time End