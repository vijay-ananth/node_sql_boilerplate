
const fs = require('fs')
const path = require('path')
const commonConfig = require('./common.js')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'

console.info('CONFIGURATION::' + env + '::selected')
const config = {}
config[env] = Object.assign({}, commonConfig[env], commonConfig[env].sequelize)
const ignoreConfig = ['common.js', 'constants.js']
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file.slice(-3) === '.js') &&
      ignoreConfig.indexOf(file) < 0
  })
  .forEach(file => {
    const moduleName = file.match(/([\w]+).js/)[1]
    const fileConfig = require(path.join(__dirname, file))
    config[env][moduleName] = fileConfig[env]
  })
module.exports = config[env]
