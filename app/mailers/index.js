const config = require("../config")
const nodemailer = require('nodemailer');

let googleCredentials = config['social_logins']['google']
let auth = {
        user: googleCredentials.email, // generated ethereal user
        pass: googleCredentials.password, // generated ethereal password
    }
    // let auth = {
    //     type: 'oauth2',
    //     user: googleCredentials['email'],
    //     clientId: googleCredentials['client_id'],
    //     clientSecret: googleCredentials['secret'],
    //     // refreshToken: '1//042luQnGZ6JvjCgYIARAAGAQSNwF-L9Ir2a0g6r0LyHESWYHoY98jNP9gx8QnUfSnIUwF4LxxG1Zon4u7ifa8ddvjPtuw_X5XRsQ',
    // }
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth,
});
// ya29.Il-vB3WH5og-cDRY2gmnjl72nMlxKpOsZyCsNS-ZXTfKXz14SHK_cdD-4vFQ3SufCSJVkLXI6qNVTsZFnALWXN9ETh205dh3bC56feNf-M1Plhd6M2Nl1QEPYlGwCjYzgg

module.exports = transporter