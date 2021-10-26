const bcrypt = require("bcrypt");

module.exports.checkPassword = async (password, userPassword) => {
    const match = await bcrypt.compare(password, userPassword);
    if(match) {
        return true;
    }
    return false;
}