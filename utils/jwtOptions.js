const { User } = require("../models");
const { checkPassword } = require("./checkPassword");

module.exports.jwtOptions = {
    userStrategy: {
        identifier: "id",
        payloadFields: ["email"],
        getUser: async (email, password) => {
            const user = await User.findOne({
                where: { email }
            });
            if(!user) return null;
            const match = await checkPassword(password, user.password);
            if(!match) return null;
            return user;
        },
        getUserByIdentifier: async (id) => {
            const user = await User.findByPk(id);
            return user;
        }
    }
}