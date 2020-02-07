'use strict';

/**
 * @description error codes
 * @type {string}
 */
const TYPE_ERROR = 'Unsupported input value type';
const RANGE_ERROR = 'Input value must be [0; 3999]';
const UNKNOWN_SYMBOLS = 'Unknown input symbols';

/**
 * @description validate input values and determinate needed convert solution
 * @param {string|number} number
 * @returns {string}
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
            result = deromanize(number);
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
 * @param {string|number} number
 * @returns {string}
 */
const romanize = (number) => {
    let roman = '',
        iterator;

    const lookup = {
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
        };

    for (iterator in lookup) {
        while (number >= lookup[iterator]) {
            roman += iterator;
            number -= lookup[iterator];
        }
    }

    return roman;
};

/**
 * @description better implementation of function deromanize
 * @param {string} roman
 * @returns {*}
 */
const deromanize = (roman) => {
    roman = roman.toUpperCase().split('');
    const lookup = {
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
