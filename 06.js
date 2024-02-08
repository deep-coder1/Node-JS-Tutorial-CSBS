// Core Module in Node JS 

// const fs = require('fs'); // Nom Global Module / In top line rwcomnded but not necessary

console.log("Node JS Tutorial");  // Core Module // Global Module
// fs.writeFileSync("06hello.txt","Core Module in Node JS");

// --> Create a file and file name is 06hello.txt and contain is --> Core Module in Node JS

console.log("Dir Name -->>",__dirname);
console.log("File Name -->>",__filename);


const fs = require('fs').writeFileSync;
fs("06hello2.txt", 'Core Module in Node JS');

// --> Create a file and file name is 06hello2.txt and contain is --> Core Module in Node JS

// Both are same
const gs = require('fs').writeFileSync;
gs("06hello3.txt", 'Core Module in Node JS');
// --> Create a file and file name is 06hello2.txt and contain is --> Core Module in Node JS

