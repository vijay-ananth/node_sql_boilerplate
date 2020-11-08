const Sequelize = require("sequelize");
const dbconfig = require("../config").sequelize;

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
    operatorAliases: false
})
sequelize.authenticate()
    .then(() => {
        logger.info("connected successfully")
    }).catch((err) => {
        logger.error(err)
    });

module.exports = sequelize;
global.sequelize = sequelize;