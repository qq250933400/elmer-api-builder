var config = require('../config/source.config');
var path = require('path');
var fs = require('fs');
var packageJson = require('../../../../package.json');

var isRelaseMode = function() {
    return /node_modules/.test(__dirname);
};

var initBuilder = function () {
    this.run = function() {
        if (config) {
            var packageConfig = config.ApiProject.packageConfig;
            if (!isRelaseMode()) {
                throw new Error('Please run this command in a production environment!');
            } else {
                var packageJsonFile = path.resolve(__dirname, '../../../../package.json');
                for (var key in packageConfig) {
                    packageJson[key] = packageConfig[key];
                }
                fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 4));
            }
        } else {
            throw new Error('Unable to get the allocation of resources the file content!');
        }
    };

};

var init = new initBuilder();

module.exports.init = init;
