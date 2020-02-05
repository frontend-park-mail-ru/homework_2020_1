'use strict';

/**
 * Encodes the input string with RLE-algorithm
 * @param {string} str - the string to be encoded.
 *   If a number is present, function returns a null
 * @return {string}
 */
let rle =  (str) => {
    if (typeof str != 'string')
        return null;

    if (/[0-9]/.test(str))
        return null;

    let res = '', tmp = '';
    let cnt = 0;

    str.split('').forEach( (item) => {
        if (item == tmp) {
            cnt++;
        }
        else if (cnt) {
            if (cnt > 1) {
                res += cnt;
            }
            cnt = 0;
        }
        if (!cnt) {
            tmp = item;
            cnt = 1;
            res += tmp;
        }
    });
    
    if (cnt > 1) {
    res += cnt;
    }

    return res;
}