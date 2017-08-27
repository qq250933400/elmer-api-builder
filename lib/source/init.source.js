"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    fileName: "D:\node\elmer-api-builder\test\mocha.opts",
    content: "test\n--recursive\n--reporter spec\n--compilers js:babel-core/register\n--coverage"
}, {
    fileName: "D:\node\elmer-api-builder\.istanbul.yml",
    content: "verbose: false\ninstrumentation:\n    root: ./src\n    extensions:\n        - .js\n    default-excludes: true\n    excludes: ['**/node-modules/**']\n    embed-source: false\n    variable: __coverage__\n    compact: true\n    preserve-comments: false\n    complete-copy: false\n    save-baseline: false\n    baseline-file: ./coverage/coverage-baseline.json\n    include-all-sources: true\n    include-pid: false\n    es-modules: false\nreporting:\n    print: summary\n    reports:\n        - lcov\n    dir: ./coverage\n    watermarks:\n        statements: [50, 80]\n        lines: [50, 80]\n        functions: [50, 80]\n        branches: [50, 80]\n    report-config:\n        clover: {file: clover.xml}\n        cobertura: {file: cobertura-coverage.xml}\n        json: {file: coverage-final.json}\n        json-summary: {file: coverage-summary.json}\n        lcovonly: {file: lcov.info}\n        teamcity: {file: null, blockName: Code Coverage Summary}\n        text: {file: null, maxCols: 0}\n        text-lcov: {file: lcov.info}\n        text-summary: {file: null}\nhooks:\n    hook-run-in-context: true\n    post-require-hook: null\n    handle-sigint: false\ncheck:\n    global:\n        statements: 0\n        lines: 0\n        branches: 0\n        functions: 0\n        excludes: []\n    each:\n        statements: 0\n        lines: 0\n        branches: 0\n        functions: 0\n        excludes: []"
}];