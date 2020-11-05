const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');
const passport = require('passport');

global.appRoot = path.resolve(__dirname);

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

//initialize database connection
require("../steel_dalal/app/db/index")

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



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});