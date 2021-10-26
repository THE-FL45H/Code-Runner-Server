const { body, checkSchema } = require("express-validator");

module.exports.registerRouteValidators = checkSchema({
    email: {
        in: ["body"],
        isEmail: {
            errorMessage: "Invalid email",
        },
        normalizeEmail: true,
        exists: {
            errorMessage: "Email is required",
        }
    },
    password: {
        in: ["body"],
        isLength: {
            errorMessage: "Password should be at least 7 characters long",
        },
        exists: {
            errorMessage: "Enter a password",
        }
    },
    password2: {
        in: ["body"],
        exists: {
            errorMessage: "Enter a password",
        },
        custom: {
            options: (value, { req, location, path }) => {
                if (value !== req[location].password) {
                    return Promise.reject("Passwords must be equal")
                }
                return Promise.resolve(value);
            }
        },
    },
    firstName: {
        in: ["body"],
        exists: {
            errorMessage: "First name is required",
        },
        notEmpty: {
            errorMessage: "First name must not be blank"
        }
    },
    lastName: {
        in: ["body"],
        exists: {
            errorMessage: "Last name is required",
        },
        notEmpty: {
            errorMessage: "Last name must not be blank"
        }
    },
});
