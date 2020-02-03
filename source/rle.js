'use strict';

function rle(str) {
    if (typeof str == 'undefined' || str == null)
        return str

    let res = '';
    for (let tmp='', cnt=1, i = 0; i < str.length; ++i, cnt=1) {
        res = res + (tmp = str[i])
        while (str[i + 1] == tmp) {
            cnt++;
            i++;
        }
        res = res + (cnt > 1 ? cnt : '')
    }

    return res
}