'use strict';

const roman = function (number) {
    let result;
    let reg_nums = /^\d+$/;
    let reg_romans = /^[IVXLCDM]+$/i;

    if (typeof number == 'string') {
        if (reg_nums.test(number))
            result = romanize(number);

        else if (reg_romans.test(number))
            result = deromanize(number);

        else result = 'error format';

    } else if (typeof number == 'number') {

        if (number >= 0 && number < 4000) {
            result = romanize(number);
        } else result = 'enter number less than 4000';

    } else result = 'error format';

    return result;
};

function romanize(number) {
    var lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        roman = '',
        i;
    for (i in lookup) {
        while (number >= lookup[i]) {
            roman += i;
            number -= lookup[i];
        }
    }
    return roman;
}

function deromanize(roman) {
    var roman = roman.toUpperCase(),
        lookup = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
        arabic = 0,
        i = roman.length;
    while (i--) {
        if (lookup[roman[i]] < lookup[roman[i + 1]])
            arabic -= lookup[roman[i]];
        else
            arabic += lookup[roman[i]];
    }
    return arabic;
}