var express = require('express');
var path = require('path');


//connect to the mongoDB
var db = require('mongoskin').db("localhost/testdb", { w: 0});
    db.bind('event');

//create express app, use public folder for static files
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

//is necessary for parsing POST request
app.use(express.bodyParser());

// date formatting

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();



app.listen(3000);

console.log("Server is Running on port 3000");