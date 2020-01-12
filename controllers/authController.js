const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../models/User');
const {registerValidation, loginValidation} = require("../services/validation");

module.exports = {
    async register(req, res) {
        if (!req.body) return res.sendStatus(400);

        // Validate data before add a new user
        const {error} = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        //   Checking if the user is already in the database

        const user = await User.find({email: req.body.email});
        if (user.length) {
            res.status(400).send("email already exists");
        } else {
            // Add a new user
            await register(req.body, res);
        }
    },

    async login(req, res) {
        if (!req.body) return res.sendStatus(400);

        // Validate data before login user
        const {error} = loginValidation(req.body);
        if (error) return res.status(403).send(error.details[0].message);

        //   Checking if the user is already in the database
        let user = await User.findOne({email: req.body.email});
        if (!user) {
            res.status(403).send("Email is not found");
        } else {
            // Check password
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) return res.status(403).send("Invalid password");
            // Create and assign a token
            const token = jwt.sign(
                {_id: user._id},
                process.env.TOKEN_SECRET
            );
            res.header("auth-token", token).send(token);
        }
    },
};

async function register(reqBody, res) {
    // Hash the password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);

    const user = new User({
        name: reqBody.name,
        email: reqBody.email,
        password: hashedPassword
    });
    await user.save();
    return res.send(200);
}
