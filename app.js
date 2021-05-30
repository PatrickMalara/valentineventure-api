const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const domain = 'api';

/*
 * From what I understand this is middleware 
 * that transform req body data into json? I will
 * need to read more...
 * */
app.use( express.json() ); 

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "vv"
});

app.get(`/${domain}/location`, function(req, res) {


    con.query("SELECT * FROM locations", function( error, result, fields) {
        if ( error ) {
            res.send(error);
        }

        res.send(result);
    } );


});

app.get(`/${domain}/location/:id`, function(req, res) {

   
    // @TODO: dont do this lol
    con.query(`SELECT * FROM locations WHERE id = ${req.params.id}`, function( error, result, fields) {
        if ( error ) {
            return res.status(418).send(error);
        }

        res.send(result);
    } );


});


app.listen(port, function() {
     console.log('Listening to my server;');
});

