#!/usr/bin/env node
import 'colors';
import { argv } from './common';
import cprBuilder from './builder/cpr.builder';
import initBuilder from './builder/init.builder';
if (argv) {
    try {
        const command = argv[2];
        if (command === 'init') {
            // 初始化项目,将资源释放到项目中,创建项目结构...
            const init = new initBuilder();
            init.run();
        } else if (command === 'cpr') {
            // 压缩资源，只在当前项目起作用，在其他项目不可执行此命令
            const cpr = new cprBuilder();
            cpr.run();
        }
    } catch (e) {
        const msg = e.message;
        console.log(`[err]${msg}`.red);
    }
}

export * from './common'; // export all interface function
