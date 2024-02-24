// Connect Node with MongoDB

// Install MongoDB Package
// Connect MongoDB with Node JS
// Show Data from MongoDB
// Interview Question

// --> npm i mongodb

// const {} = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    // console.log(collection.find({}).toArray());
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();




// When add new product record in mongodb through compass 
// Add Data, Insert Documnet

/** 
* Paste one or more documents here
*/
// {
//     "_id": {
//       "$oid": "65d89b9e88d7a562215262b4"
//     },
//     "name": "moto g34",
//     "brand": "motorola",
//     "price": 180,
//     "category": "mobile"
//   }

// Click Insert



// Output:-

// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\29_Conn_Mongodb_Node.js
// [
//   {
//     _id: new ObjectId('65d74fd317e6a1588ac49521'),
//     name: 'f15',
//     brand: 'samsung',
//     price: 220,
//     category: 'mobile'
//   },
//   {
//     _id: new ObjectId('65d75bfca51ec0f3cedf4928'),
//     name: 'redmi 13',
//     brand: 'mi',
//     price: 200,
//     category: 'mobile'
//   }
// ]
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\29_Conn_Mongodb_Node.js
// [
//   {
//     _id: new ObjectId('65d74fd317e6a1588ac49521'),
//     name: 'f15',
//     brand: 'samsung',
//     price: 220,
//     category: 'mobile'
//   },
//   {
//     _id: new ObjectId('65d75bfca51ec0f3cedf4928'),
//     name: 'redmi 13',
//     brand: 'mi',
//     price: 200,
//     category: 'mobile'
//   },
//   {
//     _id: new ObjectId('65d89b9e88d7a562215262b4'),       
//     name: 'moto g34',
//     brand: 'motorola',
//     price: 180,
//     category: 'mobile'
//   }
// ]

// 05:02:19 Video Time End