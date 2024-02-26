// Delete data from MongoDB to node js

// Make New File for Delete Data
// Import MongoDB connection
// Delete single and multiple records
// Interview Question

const dbConnect = require('./mongodb');

const deleteData = async () =>{
    // console.log("Function called");
    let data = await dbConnect();
    // let result = await data.deleteOne({name: 'note 5.1'})
    let result = await data.deleteMany({name: 'max 1'})
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("Record deleted");
    }
}

deleteData();

// Terminal
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\33_Delete_Data_MongoDB.js
// { acknowledged: true, deletedCount: 1 }
// Record deleted

// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\33_Delete_Data_MongoDB.js
// { acknowledged: true, deletedCount: 2 }
// Record deleted

// 05:41:29 Video Time End