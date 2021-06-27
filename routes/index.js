const fs = require('fs');

module.exports = function(app, con) {

    fs.readdirSync(__dirname).forEach( function(file) {

        if (file == "index.js") {
            return;
        }

        const name = file.substr(0, file.indexOf('.'));

        require('./' + name)(app, con);
    });

}
