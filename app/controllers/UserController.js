const model = require("../models");
const UserService = require("../services/UserService");

exports.signUp = async (req, res, next) => {
    let isExist = await model.user.findOne({ where: { email: req.body.email } })
    if (isExist)
        next(new ErrorHandler(400, 'Email already exist'))
    // return res.status(400).send({ statusCode: 400, message: "Email already exist" });
    UserService.signUp(req.body).then(response => {
        return res.send(response);
    }).catch(err => next(err))
};

exports.login = async (req, res, next) => {
    UserService.loginUser(req.body).then(response => {
        res.send(response);
    }).catch(err => next(err))
};

exports.forgotPassword = (req, res, next) => {
    let { email } = req.body;
    UserService.sendResetPassword(email).then(token => {
        res.send({ statusCode: 200, message: "Email sent successfully" });
    }).catch(err => next(err))
}

exports.resetPassword = (req, res, next) => {
    let { token, newPassword } = req.body
    if (!token)
        next(new ErrorHandler(400, 'Token not found'))
    UserService.resetPassword(token, newPassword).then(resp => {
        res.send(resp);
    }).catch(err => next(err))
}

exports.validateResetToken = async (req, res,next) => {
    let { token } = req.body
    UserService.validateResetToken(token).then(resp => {
        res.send(resp);
    }).catch(err => next(err))
}

exports.userProfile = (req, res,next) => {
    let currentUser = req.userObj.id
    UserService.userProfile(currentUser).then(response => {
        res.send(response);
    }).catch(err => next(err))
}

exports.facebookLogin = (req, res,next) => {
    if (!req.user)
    next(new ErrorHandler(401, 'User Not Authenticated'))
    UserService.socialLogin(req.user.id).then(response => {
        res.send(response);
    }).catch(err => next(err))
}

exports.googleLogin = (req, res,next) => {
    if (!req.user)
    next(new ErrorHandler(401, 'User Not Authenticated'))
    UserService.socialLogin(req.user.id).then(response => {
        res.send(response);
    }).catch(err => next(err))
}