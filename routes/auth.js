const express = require("express");
const router = express.Router();

const validatorResponse = require("../middlewares/validatorResponse");
const { hashPassword } = require("../utils/hashPassword");
const { registerRouteValidators } = require("../validators");

const { User } = require("../models");
const { HTTP_CREATED } = require("../utils/status_codes");
const { renderSequelizeErrors } = require("../utils/renderSequelizeErrors");


router.post("/register", registerRouteValidators, validatorResponse, async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await hashPassword(password);
    try {
        const user = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
        res.status(HTTP_CREATED).json({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        });
    } catch(err) {
        res.send(renderSequelizeErrors(err.errors));
    }
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