const fs = require('fs');
// In this code create a file 
// fs.writeFileSync('12_Data1.txt', 'This is a 12 Data 1 File');
// Create a file name is 12_Data1.txt' and file under text data 'This is a 12 Data 1 File'

// Create file folder
// In this code create a file under files folder
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.warn(dirPath);

// for(i=1; i<=5; i++)
// {
//     fs.writeFileSync(dirPath+"/12_Data"+i+".txt", "This is a 12 Data "+i+" File.");
//     // fs.writeFileSync(`12_Data${i}.txt`, `This is a 12 Data ${i} File`);
//     // Both are same
// }

// // Read file name in array 
// fs.readdir(dirPath,(err,files)=>{
//     console.warn(files);
// });

// Output:
// E:\Study\Node Tut\Node-JS-Tutorial-CSBS\files
// [
//   '12_Data1.txt',
//   '12_Data2.txt',
//   '12_Data3.txt',
//   '12_Data4.txt',
//   '12_Data5.txt'
// ]

// Read file name not in array 
fs.readdir(dirPath,(err,files)=>{
    // console.warn(files);
    files.forEach((item)=>{
        console.log("File name is: " ,item);
    })
});

// Output:
// E:\Study\Node Tut\Node-JS-Tutorial-CSBS\files
// File name is: 12_Data1.txt
// File name is: 12_Data2.txt
// File name is: 12_Data3.txt
// File name is: 12_Data4.txt
// File name is: 12_Data5.txt

// 02:10:22 Vide Time End