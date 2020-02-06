'use strict';

/**
 * counts the greatest common divisor of two numbers
 * @param first
 * @param second
 * @returns {*} GCD
 */
const euclid_for_two = (first, second) => {
    let temp;
    while (second > 0) {
        temp = second;
        second = first % second;
        first = temp;
    }
    return first;
}

/**
 * validates data for using it in euclid func
 * @param num
 * @returns {boolean}
 */
const validator = (num) => {
    if (typeof num == "number") {
        if (num >= 0) {
            if (Number.isInteger(num)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * counts GCD for n numbers
 * by calling 'euclid_for_two' in cycle for all input params
 */
const euclid = function () {
    for (let k = 0; k < arguments.length; k++) {
        if (!validator(arguments[k])) {
            return -1;
        }
    }
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
         result = euclid_for_two(result, arguments[i]);
    }
    return result;
}
