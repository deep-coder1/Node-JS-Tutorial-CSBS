// Insert data from MongoDB to node js

const dbConnect = require("./mongodb30");

const insert = async () => {
  const collection = await dbConnect();
  // console.log(db);
  // console.log("Insert function");
  const result = await collection.insertMany(
    [
                    { name: "max 1", brand: "vivo", price: 220, category: "mobile" },
                    { name: "max 2", brand: "oppo", price: 330, category: "mobile" },
                    { name: "max 3", brand: "mi", price: 420, category: "mobile" },
                  ]
  );
  if (result.acknowledged) {
    console.log("Data inserted!");
  }
};

insert();

// Terminal O/P: Insert many data in mongodb
// Node.js v20.11.0
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\31_Insert_data_MongoDB_node.js
// Data inserted!

// 05:26:27 Video Time End
