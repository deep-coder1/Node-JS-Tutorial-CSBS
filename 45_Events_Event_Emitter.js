// Events and Event Emitter in Node JS Vid = 45

// What is Events and Event Emitter
// Make an event and call it
// Interview Question

const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("Count API", ()=>{
    count++;
    console.log("Event Called: ", count)
})

app.get("/", (req,resp) =>{
    resp.send("API Called");
    event.emit("Count API");
});

app.get("/search", (req,resp) =>{
    resp.send("Search API Called");
    event.emit("Count API");
});

app.get("/update", (req,resp) =>{
    resp.send("Update API Called");
    event.emit("Count API");
});

app.listen(5000);

// 07:50:24 Video Time End