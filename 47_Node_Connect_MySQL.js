// Node JS Connect with MySQL

// Install MySQL npm package
// Connect node and Mysql
// Get Data from mysql
// Interview Question

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
}); 
con.connect((err) => {
  if (err) {
    console.warn("error");
  } else {
    console.warn("connected");
  }
});

con.query("select * from user", (err, result) => {
  console.warn("Result:", result);
});

// terminal Output:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\47_Node_Connect_MySQL.js
// connected
// Result: [
//   RowDataPacket {
//     id: 1,
//     name: 'Vatsal',
//     mobile: '7894561230',
//     email: 'jhavjhgda@jhgajsd.com',
//     role_id: 1
//   },
//   RowDataPacket {
//     id: 2,
//     name: 'Pardeep',
//     mobile: '797777979',
//     email: 'hsdfkh@ahkhd.com',
//     role_id: 2
//   }
// ]

// 08:01:48 Video Time End
