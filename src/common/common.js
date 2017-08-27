import fs from 'fs';
import os from 'os';

const obj2Code = (obj, spaceLength) => {
    const sLen = !isNaN(spaceLength) && spaceLength >= 0 ? spaceLength : 0;
    if (isArray(obj)) {
        const result = [];
        for (const key in obj) {
            const tmpObj = obj[key];
            tmpObj.code && result.push(' '.repeat(sLen) + tmpObj.code);
            if (isArray(tmpObj.children)) {
                const children = obj2Code(tmpObj.children, sLen + 4);
                children && isArray(children) && children.map && children.map((item) => {
                    result.push(item);
                });
            }
        }
        return result;
    } else {
        return [];
    }
};

export const scanFolder = (myPath, fn) => {
    if (fs.existsSync(myPath)) {
        const paths = fs.readdirSync(myPath);
        for (const key in paths) {
            const tmpStr = paths[key];
            if (paths[key]) {
                const tmpPath = myPath + '/' + tmpStr;
                const isDirectory = isDir(tmpPath);
                typeof fn === 'function' && fn(myPath, tmpPath, isDirectory);
                isDirectory && scanFolder(tmpPath, fn);
            }
        }
    } else {
        console.log(`[err]Can not find the path:${myPath}`.red);
    }
};

/**
* Check the path exists, does not exist, create the directory
* @param {string} path Check path
* @returns {null} nothing
*/
export const checkDir = (path) => {
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

/**
 * To determine whether a file or folder exists
 * @param {string} filename the determine fileName
 * @returns {bool} file If there is a file or folder
 */
export const exists = (filename) => (fs.existsSync(filename));

export const isFile = (filename) => (exists(filename) && fs.statSync(filename).isFile());

export const isDir = (filename) => (exists(filename) && fs.statSync(filename).isDirectory());

export const isArray = (value) => (Object.prototype.toString.call(value) === '[object Array]');

export const object2code = (obj) => {
    if (isArray(obj)) {
        const result = [];
        for (const key in obj) {
            const tmpObj = obj[key];
            tmpObj.code && result.push(tmpObj.code);
            if (isArray(tmpObj.children)) {
                const children = obj2Code(tmpObj.children, 4);
                children && isArray(children) && children.map((item) => {
                    result.push(item);
                });
            }
        }
        return result.join(os.EOL);
    } else {
        throw new Error('object2code get data is not an array');
    }
};

export default {};
