// Curd with file system

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'13crud');
const filePath = `${dirPath}/13_Data_1.txt`;

// Create file code:
// fs.writeFileSync(filePath,'This is a simple 13_Data 1 file.');
// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\13_CRUD_File_System.js

// Read file code:
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });
// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\13_CRUD_File_System.js
// This is a simple 13_Data 1 file.

// Update file code:
// fs.appendFile(filePath,' and file name is 13_Data_1.txt. File Update.',(err)=>{
//     if(!err) console.log("File is updated");
// })
// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\13_CRUD_File_System.js
// File is updated

// Rename file code:
fs.rename(filePath, `${dirPath}/13_Data_1_Rename.txt`,(err)=>{
    if(!err) console.log("File name is updated");
})
// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\13_CRUD_File_System.js
// File name is updated

// Delete file code:
fs.unlinkSync(`${dirPath}/13_Data_1_Rename.txt`);
// O/P:
// Deleted file
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\13_CRUD_File_System.js

// 02:19:22 Vide Time End
