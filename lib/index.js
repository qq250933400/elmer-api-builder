'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require('./common');

Object.keys(_common).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _common[key];
        }
    });
});

require('colors');

var _cpr = require('./builder/cpr.builder');

var _cpr2 = _interopRequireDefault(_cpr);

var _init = require('./builder/init.builder');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export all interface function
if (_common.argv) {
    try {
        var command = _common.argv[2];
        if (command === 'init') {
            // 初始化项目,将资源释放到项目中,创建项目结构...
            var init = new _init2.default();
            init.run();
        } else if (command === 'cpr') {
            // 压缩资源，只在当前项目起作用，在其他项目不可执行此命令
            var cpr = new _cpr2.default();
            cpr.run();
        }
    } catch (e) {
        var msg = e.message;
        console.log(('[err]' + msg).red);
    }
}