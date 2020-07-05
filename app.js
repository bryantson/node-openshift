var express = require("express");
var path = require("path");

var router = express.Router();

var mysql = require("mysql");
const { connect } = require("http2");

const MYSQL_SERVICE_HOST = process.env.MYSQL_SERVICE_HOST;
const MYSQL_SERVICE_PORT = process.env.MYSQL_SERVICE_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

var app = express();

app.use(express.static(path.join(__dirname + "/build")));


var pool = mysql.createPool({
    host: MYSQL_SERVICE_HOST,
    port: MYSQL_SERVICE_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    connectionLimit: 100
});




/*
var con = mysql.createConnection({
  host: MYSQL_SERVICE_HOST,
  port: MYSQL_SERVICE_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});
*/

app.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/pet", function(req, res, next) {
     pool.getConnection(function(err, connection) {
       connection.query("SELECT * FROM pet", function(error, result, fields) {
     // PREVENT thread pool handling:

      if(error) res.send("ERROR: " + error);
     
      res.send(JSON.stringify(result));
      connection.release();
    });
  });

}); 

module.exports = pool;

app.listen(8080);
