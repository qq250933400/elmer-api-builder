'use strict';

var stepMap,
    cursor = 0,
    secure,
    stepCallBack;
var userInput = '';

var startStepByStep = function startStepByStep(_stepMap, firstStep) {
    stepMap = _stepMap;
    dataInputting();
    next(firstStep);
};

var readLine = function readLine(tips, callBack, secure) {
    process.stdout.write(tips);
    setSecure(secure);
    stepCallBack = callBack;
};

var getCurrentStep = function getCurrentStep() {
    var stepKeys = Object.keys(stepMap);
    return stepMap[stepKeys[cursor]];
};

var next = function next(_cursor) {
    cursor = +_cursor || cursor;
    var step = getCurrentStep();
    if (step) {
        step();
    } else {
        process.stdin.resume();
        process.stdin.end();
    }
};

/**
 * 设置安全模式
 * @param {bool} _secure 安全模式 
 * @returns {null} 不需要返回消息
 */
var setSecure = function setSecure(_secure) {
    secure = !!_secure;
    process.stdin.setRawMode(secure);
};

var dataFinished = function dataFinished() {
    setSecure(false);
    userInput = userInput.toString().trim();
    var step = getCurrentStep();
    if (typeof step === 'function') {
        // 如果callback中返回true，则表示输入是合法的，可以进入下一步
        if (typeof stepCallBack === 'function' && stepCallBack(userInput)) {
            next(++cursor);
        } else {
            // 否则重复本步
            step();
        }
        userInput = '';
    } else {
        process.stdin.end();
    }
};

var dataInputting = function dataInputting() {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(false);

    /**
     * 监听数据输入，每次 Enter 则表示输入完毕
     */
    process.stdin.on('data', function (data) {
        // 如果是非安全码模式，直接回显，Enter后，结束操作
        if (!secure) {
            userInput = data;
            dataFinished();
            return;
        }
        // 安全码输入模式，回显为 *
        switch (data) {
            case '\n': // 监听 Enter 键
            case '\r':
            case '\x04':
                process.stdout.write('\n');
                dataFinished();
                break;
            case '\x03':
                // Ctrl C
                process.exit();
                break;
            default:
                // 其他字符回显为 *
                process.stdout.write('*');
                userInput += data;
                break;
        }
    });
};
exports.argv = process.argv;
exports.setSecure = function (_secure) {
    secure = _secure;
};
exports.startStepByStep = startStepByStep;
exports.readLine = readLine;