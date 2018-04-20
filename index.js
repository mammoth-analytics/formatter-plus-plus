'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
let Humanize = require('humanize-plus');
module.exports = FormatterPP;


function humaniseNumber(origNumber){
    origNumber = parseFloat(origNumber);
    if(origNumber == 0){
        return '0';
    }
    let negative = false;
    let strRep;
    if(origNumber < 0){
        negative = true;
        origNumber  *= (-1);
    }
    let l10 = Math.floor(Math.log10(origNumber));
    let base10Power = Math.pow(10, l10);
    let isInt = Number.isInteger(origNumber);

    if(l10 < 4 && l10 >= 0){
        if(isInt){
            strRep = Humanize.formatNumber(origNumber, 0);
        }
        else {
            strRep = Humanize.formatNumber(origNumber, 2);
        }
    }
    else if(l10 < 0 && l10 >= -3){
        let numAsDec = Math.round((1000/(base10Power)) * (origNumber));
        let leadingZeroString = '0.';
        for(let i = 0; i < Math.abs(l10) - 1; i++){
            leadingZeroString += '0';
        }
        strRep = leadingZeroString + numAsDec;
        while(strRep[strRep.length - 1] === '0'){
            strRep = strRep.substring(0, strRep.length - 1);
        }
    }
    else{
        let numAsDec = Math.round(100 * (origNumber/(base10Power)))/ 100;
        strRep = '10<sup>' + l10 + '</sup>';
        if(numAsDec != 1){
            strRep = numAsDec + ' x' + strRep;
        }
        if(l10 > 0){
            if(l10 < 12){
                strRep = Humanize.compactInteger(origNumber, 2 - l10%3);
            }
        }
    }

    if(strRep){
        if(negative){
            strRep = '-' + strRep;
        }
        return strRep;
    }
}



function FormatterPP(){
    let self = this;
    self.humanize = humaniseNumber;
}