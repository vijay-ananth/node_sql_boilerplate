const model = require("../models");
const UserService = require("../services/UserService");

exports.signUp = async(req, res) => {

    let isExist = await model.user.findOne({where:{ email: req.body.email }})
    console.log(isExist)
    if (isExist)
        return res.status(400).send({ statusCode: 400, message: "Email already exist" });

    UserService.signUp(req.body).then(response => {
        return res.send(response);
    }).catch(err => {
        return res.status(500).send(err);
    })

};

exports.login = async(req, res) => {
    UserService.loginUser(req.body).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
};

exports.forgotPassword = (req, res) => {
    let { email } = req.body;
    UserService.sendResetPassword(email).then(token => {
        res.send({ statusCode: 200, message: "Email sent successfully" });
    }).catch(err => {
        res.send(err);
    })
}

exports.resetPassword = (req, res) => {
    let { token, newPassword } = req.body
    if (!token)
        res.send({ statusCode: 400, message: "Token not found" });

    UserService.resetPassword(token, newPassword).then(resp => {
        res.send(resp);
    }).catch(err => {
        res.send(err);
    })
}

exports.validateResetToken = async(req, res) => {
    let { token } = req.body
    UserService.validateResetToken(token).then(resp => {
        res.send(resp);
    }).catch(err => {
        res.send(err);
    })
}

exports.userProfile = (req, res) => {
    let currentUser = req.userObj.id
    UserService.userProfile(currentUser).then(response => {
        res.send(response);
    }).catch(err => {
        res.send(err);
    })
}

exports.facebookLogin = (req, res) => {
    if (req.user) {
        UserService.socialLogin(req.user._id).then(response => {
            res.send(response);
        }).catch(err => {
            res.send(err);
        })
    } else {
        return res.status('401').send('User Not Authenticated')
    }
}

exports.googleLogin = (req, res) => {
    if (req.user) {
        UserService.socialLogin(req.user._id).then(response => {
            res.send(response);
        }).catch(err => {
            res.send(err);
        })
    } else {
        return res.status('401').send('User Not Authenticated')
    }
}