// DELETE API with node js and MySQL

// Node js Delete API with MySQL

// Make Route for API
// Get Data from Postman
// Delete data from MySQL
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

app.delete("/:id",(req,resp)=>{
    con.query("DELETE FROM user WHERE id = " + req.params.id, (error, results)=>{
        if(error) throw error;
        resp.send(results);
    })
    // resp.send(req.params.id);
})

app.listen(5000);

// Terminal Output:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\51_DELETE_API_with_MySQL.js
// Postman: (DELETE): localhost:5000/6

// Dynamic Data Delete from Postman

// id
// name
// mobile
// email
// role_id

// Id: 6 Row data deleted

// Body Response:
// {
//     "fieldCount": 0,
//     "affectedRows": 1,
//     "insertId": 0,
//     "serverStatus": 2,
//     "warningCount": 0,
//     "message": "",
//     "protocol41": true,
//     "changedRows": 0
// }

// 08:35:08 Video Time End