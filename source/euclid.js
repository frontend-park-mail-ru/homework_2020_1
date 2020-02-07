'use strict';

/**
 * counts the greatest common divisor of two numbers
 * @param {number} first
 * @param {number} second
 * @returns {number} greatest common divisor
 */
const euclidForTwo = (first, second) => {
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
 * @param {number} num
 * @returns {boolean} true if valid, false if invalid
 */
const validator = (num) =>
    (typeof num !== 'number') ? false : (num < 0) ? false : (!Number.isInteger(num)) ? false : true;

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
const euclid = function (...args) {
    if (!args.every(validator)) {
        return -1;
    }
    let result = args[0];
    for (let i = 1; i < args.length; i++) {
         result = euclidForTwo(result, args[i]);
    }
    return result;
}
