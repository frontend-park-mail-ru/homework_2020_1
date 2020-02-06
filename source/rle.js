'use strict';

/**
 * Encodes the input string with RLE-algorithm
 * @param {string} str - the string to be encoded (with no digits in it)
 * @return {string | null} encoded string when correct input, null otherwise
 */

const RLE_ERROR_TYPE = 'argument is not a string!';
const RLE_ERROR_NUMBERS = 'numbers are not allowed!';

const rle = (str) => {
    if (typeof str !== 'string') {
        throw new Error(RLE_ERROR_TYPE);
    }

    if (/[0-9]/.test(str)) {
        throw new Error(RLE_ERROR_NUMBERS);
    }

    const reducer = (prev, item, ind, arr) => {
        if (item === arr[ind + 1]) {
            prev.cnt++;
            return prev;
        }

        prev.res += item;
        if (prev.cnt > 1)
            prev.res += prev.cnt;
        prev.cnt = 1;
        return prev;
    }

    return str.split('').reduce(reducer, {'cnt': 1, 'res': ''}).res;
}