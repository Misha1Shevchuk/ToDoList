// Import file with configs to DB
const configDB = require("../configDB");
const connection = configDB.connection;

module.exports.register = (obj, res) => {
    connection.connect(err => {
        const post = {name: obj.name, email: obj.email, password: obj.password};
        const query = connection.query(
            "INSERT INTO user set ?", 
            post,
            (err, result) => {}
        );
        console.log(query.sql);
    });
};

module.exports.login = (obj, res) => {
    connection.connect(err => {
        const post = {email: obj.email, password: obj.password};
        const query = connection.query(
            "SELECT * FROM user WHERE ?", 
            post,
            (err, result) => {}
        );
        console.log(query.sql);
    });
};