var mysql = require("mysql");

const MYSQL_SERVICE_HOST = process.env.MYSQL_SERVICE_HOST;
const MYSQL_SERVICE_PORT = process.env.MYSQL_SERVICE_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

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
