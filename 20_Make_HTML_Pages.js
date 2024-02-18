// Make HTML Pages

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');
// console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);

// O/P:
// http://localhost:5000/help_20.html
// Help Page 20

// http://localhost:5000/20_about.html
// About Page 20

// http://localhost:5000/
// Home Page 20

// 03:23:25 Video Time End