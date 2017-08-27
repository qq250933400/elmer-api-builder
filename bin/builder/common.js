var fs = require('fs');

/**
* Check the path exists, does not exist, create the directory
* @param {string} path Check path
* @returns {null} nothing
*/
const checkDir = function (path) {
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
                    if (!fs.existsSync(tmpDir)) {
                        fs.mkdirSync(tmpDir);
                        console.log('mkdir:' + tmpDir);
                    }
                }
            } else {
                if (!fs.existsSync(tmpDir)) {
                    fs.mkdirSync(tmpDir);
                }
            }
        } catch (e) {
            console.log(`create folder error:[${tmpDir}], in (check_dir)common.js`.red);
        }
    }
};

module.exports = {
    checkDir: checkDir
};
