const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

module.exports.dbConnection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
