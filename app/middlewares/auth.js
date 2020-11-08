const jwt = require("../services/jwt");
const UserService = require("../services/UserService");

module.exports = async(req, res, next) => {
    const token = req.headers["x-auth"];
    if (!token) return res.send({ statusCode: 401, error: 'No token provided' })
    try {
        const decoded = jwt.verify(token);
        let userExists = await UserService.checkActive(decoded.id)
        if (!userExists) {
            res.send({ statusCode: 401, error: 'Unauthorized' })
        } else {
            req.userObj = decoded;
            next();
        }
    } catch (ex) {
        logger.error(ex)
        return res.send({ statusCode: 401, error: 'Token error' })
    }
};