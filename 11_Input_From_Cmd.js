// Input from Command Line

// Take input from cmd
// console.log(process.argv);

// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js hello
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'E:\\Study\\Node Tut\\Node-JS-Tutorial-CSBS\\11_Input_From_Cmd.js',
//   'hello'
// ]

// Take input from cmd and print from array of index
// console.log(process.argv[2]);

// O/P:
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js hello hi
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'E:\\Study\\Node Tut\\Node-JS-Tutorial-CSBS\\11_Input_From_Cmd.js',
//   'hello',
//   'hi'
// ]
// hello


// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);


const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
} else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
} else{
    console.log("Invalid Input");
}

// Output:

// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js 11_Data.txt 'This is a text data in 11_Data txt file'

// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js add 11_Data3.txt 'This is a text data3 2 in 11_Data 3 txt file'
// PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js remove 11_Data3.txt                       PS E:\Study\Node Tut\Node-JS-Tutorial-CSBS> node .\11_Input_From_Cmd.js abc 11_Data2.txt   
// Invalid Input

// 1:54:45 Vide Time End