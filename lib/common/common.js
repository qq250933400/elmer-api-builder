'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.object2code = exports.isArray = exports.isDir = exports.isFile = exports.exists = exports.checkDir = exports.scanFolder = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj2Code = function obj2Code(obj, spaceLength) {
    var sLen = !isNaN(spaceLength) && spaceLength >= 0 ? spaceLength : 0;
    if (isArray(obj)) {
        var _ret = function () {
            var result = [];
            for (var key in obj) {
                var tmpObj = obj[key];
                tmpObj.code && result.push(' '.repeat(sLen) + tmpObj.code);
                if (isArray(tmpObj.children)) {
                    var children = obj2Code(tmpObj.children, sLen + 4);
                    children && isArray(children) && children.map && children.map(function (item) {
                        result.push(item);
                    });
                }
            }
            return {
                v: result
            };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
        return [];
    }
};

var scanFolder = exports.scanFolder = function scanFolder(myPath, fn) {
    if (_fs2.default.existsSync(myPath)) {
        var paths = _fs2.default.readdirSync(myPath);
        for (var key in paths) {
            var tmpStr = paths[key];
            if (paths[key]) {
                var tmpPath = myPath + '/' + tmpStr;
                var isDirectory = isDir(tmpPath);
                typeof fn === 'function' && fn(myPath, tmpPath, isDirectory);
                isDirectory && scanFolder(tmpPath, fn);
            }
        }
    } else {
        console.log(('[err]Can not find the path:' + myPath).red);
    }
};

/**
* Check the path exists, does not exist, create the directory
* @param {string} path Check path
* @returns {null} nothing
*/
var checkDir = exports.checkDir = function checkDir(path) {
    path = path.replace(/\\/g, '/');
    var arr = path.split('/');
    var isWin = /:\//.test(path);
    var tmpDirArr = [];
    for (var key = 0; key < arr.length; key++) {
        var tmpPath = arr[key];
        var tmpDir = '';
        if (tmpDirArr.length > 0) {
            tmpDirArr.push('/');
        }
        tmpDirArr.push(tmpPath);
        tmpDir = tmpDirArr.join('');
        try {
            if (isWin) {
                if (key > 0) {
                    if (!_fs2.default.existsSync(tmpDir)) {
                        _fs2.default.mkdirSync(tmpDir);
                        console.log('mkdir:' + tmpDir);
                    }
                }
            } else {
                if (!_fs2.default.existsSync(tmpDir)) {
                    _fs2.default.mkdirSync(tmpDir);
                }
            }
        } catch (e) {
            console.log(('create folder error:[' + tmpDir + '], in (check_dir)common.js').red);
        }
    }
};

/**
 * To determine whether a file or folder exists
 * @param {string} filename the determine fileName
 * @returns {bool} file If there is a file or folder
 */
var exists = exports.exists = function exists(filename) {
    return _fs2.default.existsSync(filename);
};

var isFile = exports.isFile = function isFile(filename) {
    return exists(filename) && _fs2.default.statSync(filename).isFile();
};

var isDir = exports.isDir = function isDir(filename) {
    return exists(filename) && _fs2.default.statSync(filename).isDirectory();
};

var isArray = exports.isArray = function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
};

var object2code = exports.object2code = function object2code(obj) {
    if (isArray(obj)) {
        var _ret2 = function () {
            var result = [];
            for (var key in obj) {
                var tmpObj = obj[key];
                tmpObj.code && result.push(tmpObj.code);
                if (isArray(tmpObj.children)) {
                    var children = obj2Code(tmpObj.children, 4);
                    children && isArray(children) && children.map(function (item) {
                        result.push(item);
                    });
                }
            }
            return {
                v: result.join(_os2.default.EOL)
            };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    } else {
        throw new Error('object2code get data is not an array');
    }
};

exports.default = {};