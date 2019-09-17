const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { dbConnection } = require("../configDB");
const { registerValidation, loginValidation } = require("./validation");

module.exports.register = async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  // Validate data before add a new user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //   Checking if the user is already in the database
  dbConnection.query(
    "SELECT * FROM user WHERE email = ?",
    req.body.email,
    (err, rows, fields) => {
      if (rows.length) {
        res.status(400).send("email already exists");
      } else {
        // Add a new user
        register(req.body, res);
      }
    }
  );
};

module.exports.login = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.headers);
  console.log(req.body);

  // Validate data before login user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   Checking if the user is already in the database
  let query = dbConnection.query(
    "SELECT * FROM user WHERE email = ?",
    req.body.email,
    async (err, rows, fields) => {
      console.log(err);
      if (!rows.length) {
        res.status(400).send("Email is not found");
      } else {
        // Check password
        const validPassword = await bcrypt.compare(
          req.body.password,
          rows[0].password
        );
        if (!validPassword) return res.status(400).send("Invalid password");

        // Create and assign a token
        const token = jwt.sign(
          { _id: rows[0].id_user },
          process.env.TOKEN_SECRET
        );
        res.header("auth-token", token).send(token);
      }
    }
  );
  console.log(query.sql);
};

const register = (obj, res) => {
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
