// Import file with configs to DB
const { dbConnection } = require("../configDB");

const bcrypt = require("bcryptjs");

module.exports.register = (obj, res) => {
  dbConnection.connect(async err => {
    // Hash the password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(obj.password, salt);

    const userData = {
      name: obj.name,
      email: obj.email,
      password: hashedPassword
    };
    const query = dbConnection.query(
      "INSERT INTO user set ?",
      userData,
      (err, result) => {
        res.send({ user: result.insertId.toString() });
      }
    );
  });
};
