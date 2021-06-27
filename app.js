const express   = require('express');
const cors      = require('cors');
const app       = express();
const mysql     = require('mysql');

const { port } = require('./config');

/*
 * From what I understand this is middleware 
 * that transform req body data into json? I will
 * need to read more...
 * */
app.use( express.json() ); 
app.use( cors() ); 

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vv"
});

require('./routes')(app, con);


app.listen(port, function() {
     console.log('Listening to my server;');
});

