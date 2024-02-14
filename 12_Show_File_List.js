const fs = require('fs');
// In this code create a file 
// fs.writeFileSync('12_Data1.txt', 'This is a 12 Data 1 File');
// Create a file name is 12_Data1.txt' and file under text data 'This is a 12 Data 1 File'

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

// Read file name not in array 
fs.readdir(dirPath,(err,files)=>{
    // console.warn(files);
    files.forEach((item)=>{
        console.log("File name is: " ,item);
    })
});

// 02:10:22 Vide Time End