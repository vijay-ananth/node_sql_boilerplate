const model = {};

//load all models dynamically
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const modelImport = require(path.join(__dirname, file));
        const modelName = path.basename(path.join(__dirname, file), '.js')
        model[modelName] = modelImport;
    });

module.exports = model;