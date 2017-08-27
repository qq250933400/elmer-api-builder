'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _source = require('../config/source.config');

var _source2 = _interopRequireDefault(_source);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initBuilder = function () {
    function initBuilder() {
        _classCallCheck(this, initBuilder);
    }

    _createClass(initBuilder, [{
        key: 'run',
        value: function run() {
            console.log(__dirname);
            if (_source2.default) {
                var paths = _source2.default.path || [];
                paths.map(function (pathString) {
                    console.log(pathString);
                });
            }
        }
    }]);

    return initBuilder;
}();

exports.default = initBuilder;