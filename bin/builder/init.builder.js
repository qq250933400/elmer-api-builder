require('colors');
var config = require('../config/source.config'),
    path = require('path'),
    fs = require('fs'),
    packageJson = require('../../../../package.json'),
    common = require('./common');

var isRelaseMode = function() {
    return /node_modules/.test(__dirname);
};

var initApply = function (app) {
    if (config) {
        const packageConfig = app.packageConfig;
        if (!isRelaseMode()) {
            throw new Error('Please run this command in a production environment!');
        } else {
            const packageJsonFile = path.resolve(__dirname, '../../../../package.json');
            for (const key in packageConfig) {
                packageJson[key] = packageConfig[key];
            }
            fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 4));
            console.log('[0]    save configrature to package.json'.green);
            const paths = app.path || [];
            for (const subkey in paths) {
                common.checkDir(paths[subkey]);
            }
            console.log('[0]    Check the project structure and create the corresponding directory.'.green);
            const files = app.files || [];
            const sourcePath = path.resolve(__dirname, '../../');
            const projectPath = path.resolve(__dirname, '../../../../');
            for (const fKey in files) {
                const fileName = files[fKey];
                const sFileName = path.resolve(sourcePath, fileName).replace(/\\/g, '/');
                const pFileName = path.resolve(projectPath, fileName).replace(/\\/g, '/');
                const pIndex = pFileName.lastIndexOf('/');
                const pPath = pFileName.substr(0, pIndex);
                common.checkDir(pPath);
                const value = fs.readFileSync(sFileName, 'utf8');
                fs.writeFileSync(pFileName, value, 'utf8');
            }
            console.log('[0]    Project initialization success...'.green);
        }
    } else {
        throw new Error('Unable to get the allocation of resources the file content!');
    }
};

var initBuilder = function () {
    this.run = function() {
        var app = config.ApiProject;
        initApply(app);
    };

};

var init = new initBuilder();

module.exports.init = init;
