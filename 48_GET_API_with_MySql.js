// Node js GET API with MySql, Vid = 48

// Make config file
// Make Route for API
// Get data from MySQL
// Interview Question

const express = require("express");
const con = require("./48_Config2");
const app = express();
app.get("/", (req, resp) => {
  // resp.send("Route Done!");
  con.query("select * from user", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});
app.listen(5000);


// Run in Terminal:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\48_GET_API_with_MySql.js
// Postman: (GET) localhost:5000
// Resp Body:
// [
//     {
//         "id": 1,
//         "name": "Vatsal",
//         "mobile": "7894561230",
//         "email": "jhavjhgda@jhgajsd.com",
//         "role_id": 1
//     },
//     {
//         "id": 2,
//         "name": "Pardeep",
//         "mobile": "797777979",
//         "email": "hsdfkh@ahkhd.com",
//         "role_id": 2
//     }
// ]

// 08:09:50 Video Time End
