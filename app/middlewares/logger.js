const winston = require('winston')
const { createLogger, format, transports } = require('winston');
// define the custom settings for each transport (file, console)
const config = require('../config').logger
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level.toUpperCase()}: ${message}`;
});

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.File(config.file),
        new transports.Console(config.console)
    ],
    exitOnError: false // do not exit on handled exceptions
})

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message)
    }
}

module.exports = logger