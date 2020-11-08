const mailer = require("../")
const ejs = require("ejs")
const mailerConfig = require("../../config")["mailer"]
module.exports = class UserMailer {

    static signUp(user) {
        return new Promise(async(resolve, reject) => {
            let templateFile = appRoot + "/app/mailers/templates/signup.ejs"
            let templateVars = {
                name: user.username,
            }
            let templateHTML = await ejs.renderFile(templateFile, { obj: templateVars })
            var mailOptions = {
                from: "ajithvijay8888@gmail.com",
                to: user.email,
                subject: 'Welcome Aboard',
                html: templateHTML
            }
            mailer.sendMail(mailOptions, (err, res) => {
                if (err) {
                    logger.error("ERROR in sending EMAIL:::", err)
                    reject('Sending of email failed')
                } else {
                    resolve('Email sent')
                }
            });
        })
    }

    static forgotPassword(user) {
        return new Promise(async(resolve, reject) => {
            let templateFile = appRoot + "/app/mailers/templates/forgotPassword.ejs"
            let templateVars = {
                name: user.email,
                link: `${mailerConfig.host}${mailerConfig.resetLink}${user.resetPasswordToken}`
            }
            let templateHTML = await ejs.renderFile(templateFile, { obj: templateVars })
            var mailOptions = {
                from: "ajithvijay8888@gmail.com",
                to: user.email,
                subject: 'Reset Password Instructions - Steel Dalal',
                html: templateHTML
            }

            mailer.sendMail(mailOptions, (err, res) => {
                if (err) {
                    logger.error("ERROR in sending EMAIL:::", err)
                    reject('Sending of email failed')
                } else {
                    resolve('Email sent')
                }
            });
        })
    }
}