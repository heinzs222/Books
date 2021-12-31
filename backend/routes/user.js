const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
router.post("/signup", async (req, res) => {
    const { email } = req.body;
    const testEmail = await User.findOne({ email });
    if (testEmail) {
        return res
            .status(500)
            .json({ message: "couldn't sign up, please try again" });
    }
    const user = new User(req.body);
    try {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(req.body.password, salt);
        user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: "couldn't create the user" });
    }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(500).json({ message: "Email doesn't exist " });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(500).json({ message: "Password is incorrect" });
    }
    return res.status(200).json(user);
});
module.exports = router;
