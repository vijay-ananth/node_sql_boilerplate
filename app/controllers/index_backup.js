const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
let controller = {}
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const controllerImport = require(path.join(__dirname, file));
        const controllerName = path.basename(path.join(__dirname, file), '.js')
        controller[controllerName] = controllerImport;
    });
module.exports = controller;