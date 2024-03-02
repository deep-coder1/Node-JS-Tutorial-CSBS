// Search API with node js and mongoose Vid - 42

// Make Simple GET Route for API
// Search with single fields
// Search with multiple fields
// Test API
// Interview Question

const express = require("express");
require("./config40");
const Product = require("./product40");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  // resp.send("Search Done!");
  console.log(req.params.key);
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } }
    ],
  });
  resp.send(data);
});

app.listen(5000);

// Postman: (GET)
// localhost:5000/search/samsung
// Body: Search Done!

// Postman: (GET)
// localhost:5000/search/Samsung
// Response Body:
// [
//     {
//         "_id": "65df60fc89999ead31f8c32d",
//         "name": "Samsung M33",
//         "price": 19000,
//         "brand": "samsung",
//         "category": "mobile",
//         "__v": 0
//     },
//     {
//         "_id": "65df6186cb1cdac2510a2dd6",
//         "name": "Samsung M34",
//         "price": 16000,
//         "brand": "samsung",
//         "category": "mobile",
//         "__v": 0
//     },
//     {
//         "_id": "65df62290b68f365d3cad49c",
//         "name": "Samsung A15",
//         "price": 17500,
//         "brand": "samsung",
//         "category": "mobile",
//         "__v": 0
//     }
// ]

// 7:18:35 Search API with node js and mongoose
// 07:26:26 Video Time End
