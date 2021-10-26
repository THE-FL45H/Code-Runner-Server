module.exports.renderSequelizeErrors = (errors) => {
    try {
        return {
            errors: errors.map((err) => ({
                msg: err.message
            }))
        };
    } catch (err) {
        return `${errors}`;
    }
}