'use strict';


/**
 * Encodes the input string with RLE-algorithm
 * @param {string} str - the string to be encoded.
 *   If a number is present, function returns a null
 * @return {string}
 */
function rle(str) {
    if (typeof str == 'undefined' || str == null)
        return str

    let res = '';
    for (let tmp='', cnt=1, i = 0; i < str.length; ++i, cnt=1) {
        res = res + (tmp = str[i])
        if (tmp >= '1' && tmp <= '9')
            return null
        while (str[i + 1] == tmp) {
            cnt++;
            i++;
        }
        res = res + (cnt > 1 ? cnt : '')
    }

    return res
}