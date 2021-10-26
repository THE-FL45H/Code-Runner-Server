const { hashPassword } = require("../utils/hashPassword");
const { HTTP_CREATED, HTTP_INTERNAL_SERVER_ERROR, HTTP_BAD_REQUEST } = require("../utils/status_codes");
const { renderSequelizeErrors } = require("../utils/renderSequelizeErrors");

const { User } = require("../models");

module.exports = async (req, res) => {
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
        res.status(HTTP_BAD_REQUEST).send(renderSequelizeErrors(err.errors));
    }
}