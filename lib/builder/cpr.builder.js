'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import fs from 'fs';

// import os from 'os';


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('colors');

var _source = require('../config/source.config');

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { checkDir, exists, isFile, object2code } from '../common';
var cprBuilder = function () {
    function cprBuilder() {
        _classCallCheck(this, cprBuilder);
    }

    _createClass(cprBuilder, [{
        key: 'run',
        value: function run() {
            var isExists = false;
            if (_source2.default) {
                var rootPath = _path2.default.resolve(__dirname, '../../');
                // const result = [
                //     {
                //         code: 'export default [',
                //         children: []
                //     },
                //     {
                //         code: ']'
                //     }
                // ];
                // const resultC = result[0].children;
                // const saveFile = path.resolve(__dirname, '../source/init.source.js');
                for (var key in _source2.default) {
                    var pathString = _source2.default[key].path;
                    var files = _source2.default[key].files;
                    var localPath = _path2.default.resolve(__dirname, pathString);
                    isExists = true;
                    // checkDir(pathString);
                    if (files && Object.prototype.toString.call(files) === '[object Array]') {
                        for (var subKey in files) {
                            var fileName = files[subKey];
                            var sourceFileName = _path2.default.resolve(localPath, fileName);
                            var resolveFileName = sourceFileName.substr(rootPath.length);
                            var destFileName = _path2.default.resolve(__dirname, '../source', '.' + resolveFileName);
                            console.log(sourceFileName, resolveFileName);
                            console.log(destFileName);
                            // if (exists(fileName) && isFile(fileName)) {
                            //     const content = fs.readFileSync(fileName, 'utf8');
                            //     resultC.push({
                            //         code: '{',
                            //         children: [
                            //             {code: 'fileName:"' + fileName + '",'},
                            //             {code: 'content:`' + content + '`'}
                            //         ]
                            //     });
                            //     resultC.push({code: '},'});
                            // }
                        }
                    }
                }
                // result[0].children = resultC;
                // console.log(object2code(result));
                // fs.writeFileSync(saveFile, object2code(result));
            }
            !isExists && this.raiseError('Failed to find any configuration information!');
            console.log('build resource complete!'.green);
        }
    }, {
        key: 'raiseError',
        value: function raiseError(msg) {
            throw new Error(msg);
        }
    }]);

    return cprBuilder;
}();

exports.default = cprBuilder;