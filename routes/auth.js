const router = require("express").Router();
const user = require("./userRegister");
const jwt = require("jsonwebtoken");
const {dbConnection} = require("../configDB");
// const connection = configDB.connection;
const bcrypt = require("bcryptjs");
// Import validation
const { registerValidation, loginValidation } = require("./validation");

// REGISTER *************
router.post("/register", async (req, res) => {
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
        user.register(req.body, res);
      }
    }
  );
});

// LOGIN *************
router.post("/login", (req, res) => {
  // Validate data before login user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //   Checking if the user is already in the database
  dbConnection.query(
    "SELECT * FROM user WHERE email = ?",
    req.body.email,
    async (err, rows, fields) => {
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
});

module.exports = router;
