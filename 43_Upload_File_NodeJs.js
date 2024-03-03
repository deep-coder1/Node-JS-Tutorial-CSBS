// Upload File in Node JS Vid - 13

// Install Multer npm package
// Make Router for upload file
// Write Code for upload file
// Interview Question

// npm i multer

const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (rew, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload",upload, async (req, resp) => {
  resp.send("File Uploaded");
});

app.listen(5000);

// Terminal"
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\43_Upload_File_NodeJs.js

// Postman: (POST): localhost:5000/upload
// Body -> form-data -> type-> user_file -> slect image

// Body Response:
// File Uploaded


// 07:35:39 Video Time End
