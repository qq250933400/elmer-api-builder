/* eslint-disable quotes */
module.exports.ApiProject = {
    path: [
        './test',
        './src'
    ],
    files: [
        './test/mocha.opts',
        './test/mocha.jsdom.js',
        './.babelrc',
        './.eslintrc.json',
        './.istanbul.yml'
    ],
    packageConfig: {
        "scripts": {
            "test": "eslint test && mocha --compilers js:babel-core/register",
            "lint": "eslint bin",
            "lib": "babel src/ --out-dir lib/",
            "dev": "eslint src && babel-node src/index.js",
        },
        "dependencies": {
            "babel-cli": "^6.26.0",
            "babel-core": "^6.25.0",
            "babel-eslint": "^7.2.3",
            "babel-loader": "^7.1.1",
            "babel-plugin-transform-react-jsx": "^6.24.1",
            "babel-polyfill": "^6.23.0",
            "babel-preset-es2015": "^6.24.1",
            "babel-preset-react": "^6.24.1",
            "babel-preset-stage-0": "^6.24.1",
            "chai": "^4.1.1",
            "colors": "^1.1.2",
            "enzyme": "^2.9.1",
            "eslint": "^4.5.0",
            "eslint-plugin-react": "^7.3.0",
            "istanbul": "^0.4.5",
            "jsdom": "^11.2.0",
            "mocha": "^3.5.0",
            "mochawesome": "^2.3.0",
            "react": "^15.6.1",
            "react-dom": "^15.6.1",
            "react-hot-loader": "^1.3.1",
            "react-redux": "^5.0.5",
            "react-router": "^4.1.2",
            "redux": "^3.7.2",
            "redux-saga": "^0.15.6",
            "should": "^11.2.1"
        },
        "devDependencies": {
            "eslint-config-standard": "^10.2.1",
            "eslint-plugin-import": "^2.7.0",
            "eslint-plugin-node": "^5.1.1",
            "eslint-plugin-promise": "^3.5.0",
            "eslint-plugin-standard": "^3.0.1"
        }
    }
};
/* eslint-enable quotes */
