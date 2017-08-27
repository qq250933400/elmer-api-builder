require('colors');
var config = require('../config/source.config'),
    path = require('path'),
    fs = require('fs'),
    packageJson = require('../../../../package.json'),
    common = require('./common');

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
                console.log('[0]    save configrature to package.json'.green);
                const paths = config.ApiProject.path || [];
                for (var key in paths) {
                    common.checkDir(paths[key]);
                }
                console.log('[0]    Check the project structure and create the corresponding directory.'.green)
            }
        } else {
            throw new Error('Unable to get the allocation of resources the file content!');
        }
    };

};

var init = new initBuilder();

module.exports.init = init;
