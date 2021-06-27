const { domain } = require('../config');

module.exports = function(app, con)  {

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

}
