// Update data from MongoDB to node js

// Make New File for Update data
// Import MongoDB connection
// Upadate single and multiple records
// Interview Question

const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "note 5" },
    {
      $set: { name: "note 5.1", price: 310},
    }
  );
  console.warn(result);
};

updateData();

// Terminal
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\32_Update_data_MongoDB_node.js
// {
//   acknowledged: true,
//   modifiedCount: 2,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 2
// }


// 05:33:44 Video Time End