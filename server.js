const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');
const passport = require('passport');
const logger = require('./app/middlewares/logger')
const { handleError, ErrorHandler } = require('./app/services/ErrorHandler');


global.appRoot = path.resolve(__dirname);
global.logger = logger
global.ErrorHandler = ErrorHandler

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

//initialize database connection
require("./app/db/index")

// passport initialization
require('./app/services/passport')(passport);
app.use(passport.initialize());
// app.use(passport.session());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// heartbeat route
app.get("/ping", (req, res) => {
    res.status(200).send("pong")
});

// routes
app.use("/api", require("./app/routes"));

app.use((err, req, res, next) => {
    handleError(err, res);
});

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}.`);
});