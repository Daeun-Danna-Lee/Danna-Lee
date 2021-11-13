const express = require("express");
const router = express.Router();

// user/signup
// router.[method]("[route]", [logic])
router.post("/signup", (req, res) => {
    
    // email, password
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const newUser = { name: name, password: password, email: email };

    res.status(200).send(newUser);

});

module.exports = router;