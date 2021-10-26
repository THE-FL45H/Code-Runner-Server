const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({
        details: "Register",
    });
})

router.post("/token", (req, res) => {
    res.json({
        details: "Use as login",
    });
})

router.post("/token/refresh", (req, res) => {
    res.json({
        details: "Refresh token"
    });
})

module.exports = router;