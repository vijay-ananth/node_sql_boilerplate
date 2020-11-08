const path = require('path')
const dir = p => path.join(__dirname, p)
module.exports = {
    development: {
        file: {
            level: 'info',
            filename: dir('../logs/devleopment.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false
        },
        console: {
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }
    },
    production: {
        file: {
            level: 'info',
            filename: dir('../logs/production.log'),
            handleExceptions: true,
            json: false,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false
        },
        console: {
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }
    },
    staging: {
        file: {
            level: 'info',
            filename: dir('../logs/staging.log'),
            handleExceptions: true,
            json: false,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false
        },
        console: {
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        }
    }
}