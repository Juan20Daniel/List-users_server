const mysql = require("mysql");

const myConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"test"
});
myConnection.connect(function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The connection to the database was successful");
    }
});

module.exports = myConnection;