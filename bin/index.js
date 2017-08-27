#!/usr/bin/env node
require('colors');
require('util');
var config = require('../package.json');
var argv = process.argv;
if (argv) {
    try {
        const command = argv[2];
        if (/node_modules/.test(__dirname)) {
            if (command === 'init') {
                // 初始化项目,将资源释放到项目中,创建项目结构...
                var initBuilder = require('./builder/init.builder');
                initBuilder.init.run();
            } else if (command === 'help') {
                var helpBuilder = require('./builder/help.builder');
                helpBuilder.helper.run(argv);
            } else if (command === 'version' || command === 'v') {
                console.log(config.version.green);
            } else {
                throw new Error(`Does not support the command "${command}"`);
            }
        } else {
            throw new Error('Please install this program first!');
        }
    } catch (e) {
        const msg = e.message;
        console.log(`[err]${msg}`.red);
    }
}
