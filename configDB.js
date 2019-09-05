const mysql = require("mysql");

module.exports.connection = mysql.createConnection({
  database: "todolist",
  host: "dbproject.czrnsracishq.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "dbproject"
});
