require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwtAuth = require("express-jwt-auth");

const validatorResponse = require("../middlewares/validatorResponse");
const { registerRouteValidators } = require("../validators");

const { jwtOptions } = require("../utils/jwtOptions");
const registerUser = require("../controllers/registerUser");

const { getToken, refreshToken } = jwtAuth(jwtOptions);

router.post("/register", registerRouteValidators, validatorResponse, registerUser);

router.post("/token", getToken);

router.post("/token/refresh", refreshToken);

module.exports = router;