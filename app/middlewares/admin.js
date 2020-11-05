const jwt = require("../services/jwt");
const model = require("../models");

module.exports = async(req, res, next) => {
    const token = req.headers["x-auth"];
    if (!token) return res.send({ statusCode: 401, error: 'No token provided' })
    try {
        const decoded = jwt.verify(token);
        req.userObj = decoded;
        user = await model.user.findOne({ _id: req.userObj.id });
        if (user && user.role == 'ADMIN') {
            next();
        } else {
            return res.send({ statusCode: 401, error: 'Unauthorized' })
        }
    } catch (ex) {
        console.log(ex)
        return res.send({ statusCode: 401, error: 'Token error' })
    }
};