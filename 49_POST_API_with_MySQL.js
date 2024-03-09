// POST API with node and MySQL. Vid - 49

// Node js POST API with MySQL

// Make Route for API
// Insert data in MySQL
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

app.use(express.json());
app.post("/",(req,resp)=>{
    // const data = {name:"Deepak", mobile:1234567890, email:"deepak@demo.com", role_id:"3"};
    // Take data from postman body
    const data = req.body;
    con.query('INSERT INTO user SET ?', data, (error, result, fields)=>{
        if(error) error;
        resp.send(result);
    })
})

app.listen(5000);

// Terminal Output:
// Postman: (POST): localhost:5000

// {"name":"Deepak2","mobile":"1234567891", "email":"deepak2@demo.com", "role_id":"4"}

// id
// name
// mobile
// email
// role_id

// 3
// Deepak
// 1234567890
// deepak@demo.com
// 3


// 4
// Deepak2
// 1234567891
// deepak2@demo.com
// 4

// Create two row data one static and one from postman

// Body Response: 
// {
//     "fieldCount": 0,
//     "affectedRows": 1,
//     "insertId": 4,
//     "serverStatus": 2,
//     "warningCount": 0,
//     "message": "",
//     "protocol41": true,
//     "changedRows": 0
// }


// 08:17:51 Video Time End