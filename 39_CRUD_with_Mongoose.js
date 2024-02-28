// CRUD with Mongoose Vid = 39

// Continue Last Video Code(What is mongoose, model, schema etc).
// Update Record.
// Delete Record.
// Find and Read Result.

const mongoose = require("mongoose");

// const saveInDB = async () => {
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "Note 12",
    price: 250,
    brand: "redmi",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
// {
//   name: 'Note 12',
//   price: 250,
//   brand: 'redmi',
//   category: 'mobile',
//   _id: new ObjectId('65df47ec035d024a186348b0'),
//   __v: 0

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "Note 12" },
    {
      $set: { price: 280, name: 'Redmi Note 12' },
    }
  );
  console.log(data);
};

// updateInDB();

// Terminal O/P

// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
// {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }

// --> Again name and price change
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
// {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1
// }

const deleteInDB = async () =>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name:'m10'});
    console.log(data);
}

// deleteInDB();

// Terminal O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
// { acknowledged: true, deletedCount: 1 }

const findInDB = async () =>{
    const Product = mongoose.model('products', ProductSchema);
    // let data = await Product.find(); // Show all data from DB
    let data = await Product.find({name: "Redmi Note 12"}); // Show specific data only name matched data
    console.log(data);
}
findInDB();

// Terminal O/P:
// All data :-
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
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
//     etc ..
//   }
// ]


// Specific Data Redmi Note 12 :
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\39_CRUD_with_Mongoose.js
// [
//   {
//     _id: new ObjectId('65df47ec035d024a186348b0'),
//     name: 'Redmi Note 12',
//     price: 280,
//     brand: 'redmi',
//     category: 'mobile',
//     __v: 0
//   }
// ]

// 06:50:30 Video Time End
