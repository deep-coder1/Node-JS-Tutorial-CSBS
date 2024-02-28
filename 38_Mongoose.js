// Start with Mongoose V - 38

// What is Mongoose
// Difference between Mongoose vs MongoDB Package
// Install Mongoose
// What is schemas
// What is Model
// Connect Node js and MongoDB with Mongose

const mongoose = require('mongoose');

const main = async () =>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({name:"m10", price:800});
    let result = await data.save();
    console.log(result);
}

main();

// 06:37:50 Video Time End
