// Import file with configs to DB
const configDB = require("../configDB");
const connection = configDB.connection;

const bcrypt = require("bcryptjs");

module.exports.register = (obj, res) => {
  connection.connect(async err => {

    // Hash the password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(obj.password, salt);

    const userData = {
      name: obj.name,
      email: obj.email,
      password: hashedPassword
    };
    const query = connection.query(
        "INSERT INTO user set ?",
        userData,
        (err, result) => {
            res.send({user: (result.insertId).toString()});
        }
      );
  });
};

module.exports.login = (obj, res) => {
  connection.connect(err => {
    const post = { email: obj.email, password: obj.password };
    const query = connection.query(
      "SELECT * FROM user WHERE ?",
      post,
      (err, result) => {}
    );
    console.log(query.sql);
  });
};
