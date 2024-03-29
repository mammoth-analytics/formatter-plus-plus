'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
import {compactInteger, formatNumber} from 'humanize-plus';


function humaniseNumber(inNumber: number|string, options: HumanizeOptions = {}){
    let origNumber: number = parseFloat('' + inNumber);
    // if given number is 0 or a falsy value it should return 0
    if(origNumber == 0 || !origNumber){
        return '0';
    }
    var negative = false;
    var strRep;
    if(origNumber < 0){
        negative = true;
        origNumber  *= (-1);
    }
    var l10 = Math.floor(Math.log(origNumber)/Math.LN10);
    var base10Power = Math.pow(10, l10);
    var isInt = Math.floor(origNumber) == Math.ceil(origNumber);

    if(l10 < 4 && l10 >= 0){
        var decimals = 0;
        if(isInt){
            decimals = 0;
        }
        else if(l10 == 0 || l10 == 1){
            decimals = 2;
        }
        else if(l10 == 2){
            decimals = 1
        }
        strRep = formatNumber(origNumber, decimals);
    }
    else if(l10 < 0 && l10 >= -3){
        var numAsDec = Math.round((1000/(base10Power)) * (origNumber));
        var leadingZeroString = '0.';
        for(var i = 0; i < Math.abs(l10) - 1; i++){
            leadingZeroString += '0';
        }
        strRep = leadingZeroString + numAsDec;
        while(strRep[strRep.length - 1] === '0'){
            strRep = strRep.substring(0, strRep.length - 1);
        }
    }
    else{
        var numAsDec = Math.round(100 * (origNumber/(base10Power)))/ 100;
        let seperator = '';
        if(!options.eNotation){
            strRep = '10<sup>' + l10 + '</sup>';
            seperator = ' x';
        }
        else{
            strRep = 'e' + l10;
        }
        if(numAsDec != 1){
            strRep = numAsDec + seperator + strRep;
        }

        if(l10 > 0){
            if(l10 < 12){
                strRep = compactInteger(origNumber, 2 - l10%3);
            }
        }
    }

    if(strRep){
        if(options.suffix){
            strRep = strRep + options.suffix;
        }
        if(options.prefix){
            strRep = options.prefix + strRep;
        }
        if(negative){
            strRep = '-' + strRep;
        }
        return strRep;
    }
}


export interface HumanizeOptions{
    prefix?: string,
    suffix?: string,
    eNotation?: boolean
}


export class FormatterPP {
    humanize = humaniseNumber;
}