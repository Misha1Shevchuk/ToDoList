const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

module.exports.connection = mysql.createConnection({
  database: "todolist",
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
