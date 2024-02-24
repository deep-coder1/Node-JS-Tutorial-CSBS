const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let collection = db.collection('products');
    // console.log(collection.find({}).toArray());
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

// dbConnect();
// console.warn(dbConnect());

// dbConnect().then((resp)=>{
//     // console.warn(resp.find().toArray());
//     resp.find().toArray().then((data)=>{ // All data print
//     // resp.find({name: "moto g34"}).toArray().then((data)=>{ // Single Data Print
//         console.warn(data);
//     });
// })

// Promise Handle

// const main = async ()=>{
//     // console.log("Main function called");
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();

module.exports = dbConnect;