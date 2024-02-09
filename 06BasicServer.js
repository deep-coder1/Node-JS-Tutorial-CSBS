// Make basic server in node js

const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>Hello this is Deep Coder1</h1>");
    resp.end();
  })
  .listen(4100);

// Through function
function dataControl(req, resp) {
  resp.write("<h1>Hello this is Deep Coder1 -->> Through function</h1>");
  resp.end();
}

http.createServer(dataControl).listen(4200);

// Through arrow function
const dataControl2 = (req, resp) => {
  resp.write("<h1>Hello this is Deep Coder1 -->> Through arrow function</h1>");
  resp.end();
};

http.createServer(dataControl2).listen(4300);
  

// Through arrow function same
http.createServer((req, resp) => {
    resp.write(
    "<h1>Hello this is Deep Coder1 -->> Through normal function</h1>"
    );
    resp.end();
})
.listen(4400);



// Normal Function
function test(a){
    return a*10;
}
// Arrow Function
const test = (a) => a*10

// Both are same but arrow function are short

// test(a,b)
// {}
// test(10,20);

// 1:4:30
