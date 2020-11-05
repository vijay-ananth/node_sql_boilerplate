const env = process.env.NODE_ENV || "development"
console.log("CONFIGURATION::" + env + "::selected")
const config = require("./config.json")
module.exports = config[env];