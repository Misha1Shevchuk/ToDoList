const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    database: 'todolist_db',
    host: "localhost",
    user: "root",
    password: "",
});