#!/usr/bin/env node
require('colors');
require('util');
var initBuilder = require('./builder/init.builder');
var helpBuilder = require('./builder/help.builder');
var config = require('../package.json');
var argv = process.argv;
if (argv) {
    try {
        const command = argv[2];
        if (command === 'init') {
            // 初始化项目,将资源释放到项目中,创建项目结构...
            initBuilder.init.run();
        } else if (command === 'help') {
            helpBuilder.helper.run(argv);
        } else if (command === 'version' || command === 'v') {
            console.log(config.version.green);
        }
    } catch (e) {
        const msg = e.message;
        console.log(`[err]${msg}`.red);
    }
}
