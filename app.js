var mysql = require("mysql");

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
