const { validationResult } = require("express-validator");
const { HTTP_BAD_REQUEST } = require("../utils/status_codes");

const validatorResponse = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HTTP_BAD_REQUEST).json({
            errors: errors.array(),
        })
    } else {
        next();
    }
}

module.exports = validatorResponse;