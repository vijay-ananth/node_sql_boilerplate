const Sequelize = require("sequelize")
const dbconfig = require("../config").sequelize
console.log(dbconfig.password)

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    operatorAliases: false
})
sequelize.authenticate()
    .then(() => {
        console.log("connected successfully")
    }).catch((err) => {
        console.log(err)
    });
   
module.exports = sequelize;
global.sequelize = sequelize;