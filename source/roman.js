'use strict';

/**
 * @description error codes
 * @type {string}
 */
const TYPE_ERROR = 'Unsupported input value type';
const RANGE_ERROR = 'Input value must be [0; 3999]';
const UNKNOWN_SYMBOLS = 'Unknown input symbols';

/**
 *@description validate input values and determinate needed convert solution
 * @param number
 * @returns {*}
 */
const roman = (number) => {
    let result;
    let reg_nums = /^-?\d+$/;
    let reg_romans = /^[IVXLCDM]+$/i;

    if (typeof number == 'string' || typeof number == 'number') {
        if (reg_nums.test(number)) {

            if (number >= 0 && number < 4000) {
                result = romanize(number);

            } else {
                throw new Error(RANGE_ERROR);
            }

        } else if (reg_romans.test(number)) {
            result = better_deromanize(number);

        } else {
            throw new Error(UNKNOWN_SYMBOLS);
        }

    } else {
        throw new Error(TYPE_ERROR);
    }

    return result;
};

/**
 * @description convert from number or numerical string (arabic) to Roman performance
 * @param number
 * @returns {string}
 */
let romanize = (number) => {
    let lookup = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        roman = '',
        i;

    for (i in lookup) {
        while (number >= lookup[i]) {
            roman += i;
            number -= lookup[i];
        }
    }

    return roman;
};

/**
 * @description convert from Roman number to arabic performance
 * @param roman
 * @returns {number}
 */
let deromanize = (roman) => {
    let roman_number = roman.toUpperCase(),
        lookup = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        },
        arabic = 0,
        i = roman_number.length;

    while (i--) {
        if (lookup[roman_number[i]] < lookup[roman_number[i + 1]])
            arabic -= lookup[roman_number[i]];
        else
            arabic += lookup[roman_number[i]];
    }

    return arabic;
};

/**
 * @description better implementation of function deromanize
 * @param roman
 * @returns {*}
 */
let better_deromanize = (roman) => {
    roman = roman.toUpperCase().split('');
    let lookup = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const mapper = (item) => lookup[item];
    const reducer = (prevResult, currentItem, index, array) => {
      if (index !== 0 && currentItem > array[index - 1])
          return prevResult - 2 * array[index - 1] + currentItem;
      else
          return prevResult + currentItem;
    };

    return roman.map(mapper).reduce(reducer);
};
