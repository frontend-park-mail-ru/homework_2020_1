'use strict';

/**
 * Encodes the input string with RLE-algorithm
 * @param {string} str - the string to be encoded (with no digits in it)
 * @return {string} when correct input, or a {null} otherwise
 */
let rle =  (str) => {
    if (typeof str !== 'string') {
        return null;
    }

    if (/[0-9]/.test(str)) {
        return null;
    }

    let res = '';
    let cnt = 1;

    str.split('').forEach( (item, ind, arr) => {
        if (item === arr[ind + 1]) {
            cnt++;
        } else {
            res += item;
            if (cnt > 1)
                res += cnt;
            cnt = 1;
        }
    });

    return res;
}