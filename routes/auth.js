const router = require('express').Router();
const user = require("./user");

router.post('/register', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    user.register(req.body)
    res.sendStatus(200);
});

module.exports = router;