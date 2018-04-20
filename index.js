'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = FormatterPP;
let humaniseNumber = require('./src/humanize');


function FormatterPP(){
    let self = this;
    self.humanize = humaniseNumber;
}