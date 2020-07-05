var mysql = require("mysql");

const MYSQL_SERVICE_HOST = process.env.MYSQL_SERVICE_HOST;

console.log(`Your HOST is:  ${MYSQL_SERVICE_HOST}`);

var con = mysql.createConnection({
  host: "mysql.mysql-react.svc.cluster.local",
  database: "dbtest",
  user: "tester",
  password: "Pass1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});
