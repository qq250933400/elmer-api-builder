var config = require('../config/help.config');

/**
 * use command help module
 * @returns {null} return nothing
 */
function helper () {
    this.run = function () {
        console.log(config.config.main);
    };
}

var helperObject = new helper();

module.exports.helper = helperObject;
