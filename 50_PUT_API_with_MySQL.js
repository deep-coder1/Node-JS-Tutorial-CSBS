// PUT API with node js and MySQL. Vid - 50

// Node js PUT API with MySQL

// Make Route for API
// Get Data from Postman
// Update data in MySQL
// Interview Question

const express = require("express");
const con = require("./48_Config2");
const app = express();

app.use(express.json());

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

// app.use(express.json());
app.post("/",(req,resp)=>{
    // const data = {name:"Deepak", mobile:1234567890, email:"deepak@demo.com", role_id:"3"};
    // Take data from postman body
    const data = req.body;
    con.query('INSERT INTO user SET ?', data, (error, result, fields)=>{
        if(error) error;
        resp.send(result);
    })
})

// app.put("/",(req,resp)=>{
//     const data = ["Puja", '1234567892', "puja@demo.com", "5", 4];
//     con.query("UPDATE user SET name = ?, mobile = ?, email = ?, role_id = ? where id = ?", data,(err, result, fields)=>{
//         if(err) error;
//         resp.send(result);
//     });
//     // resp.send("Update api working");
// })

// app.listen(5000);

// Terminal Output: 
// Postman: (PUT): localhost:5000

// Static Data Update

// id
// name
// mobile
// email
// role_id

// 4
// Puja
// 1234567892
// puja@demo.com
// 5

// Dynamic from Postman:
// app.use(express.json());
app.put("/:id",(req,resp)=>{
    // const data = ["Puja", '1234567892', "puja@demo.com", "5", 4];
    const data = [req.body.name, req.body.mobile, req.body.email, req.body.role_id, req.params.id];
    con.query("UPDATE user SET name = ?, mobile = ?, email = ?, role_id = ? where id = ?", data,(err, result, fields)=>{
        if(err) error;
        resp.send(result);
    });
    // resp.send("Update api working");
})

app.listen(5000);

// Terminal Output:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\50_PUT_API_with_MySQL.js
// Postman: (PUT): localhost:5000

// Dynamic Data Update from Postman

// Body -> Row -> JSON
// {
//     "name":"Sandeep",
//     "mobile":"1234567891",
//     "email":"sandeep@demo.com",
//     "role_id":"4"
// }

// id
// name
// mobile
// email
// role_id

// 4
// Sandeep
// 1234567891
// sandeep@demo.com
// 4


// 08:29:06 Video Time End