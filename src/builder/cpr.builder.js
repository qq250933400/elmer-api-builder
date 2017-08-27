// import fs from 'fs';
import path from 'path';
// import os from 'os';
import 'colors';
import config from '../config/source.config';
// import { checkDir, exists, isFile, object2code } from '../common';
class cprBuilder {
    run () {
        let isExists = false;
        if (config) {
            const rootPath = path.resolve(__dirname, '../../');
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
            for (const key in config) {
                const pathString = config[key].path;
                const files = config[key].files;
                const localPath = path.resolve(__dirname, pathString);
                isExists = true;
                // checkDir(pathString);
                if (files && Object.prototype.toString.call(files) === '[object Array]') {
                    for (const subKey in files) {
                        const fileName = files[subKey];
                        const sourceFileName = path.resolve(localPath, fileName);
                        const resolveFileName = sourceFileName.substr(rootPath.length);
                        const destFileName = path.resolve(__dirname, '../source', '.' + resolveFileName);
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
    raiseError (msg) {
        throw new Error(msg);
    }
}

export default cprBuilder;
