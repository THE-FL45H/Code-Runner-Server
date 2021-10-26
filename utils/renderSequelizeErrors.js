module.exports.renderSequelizeErrors = (errors) => {
    try {
        return errors.map((err) => err.message);
    } catch (err) {
        return `${errors}`;
    }
}