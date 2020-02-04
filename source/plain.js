'use strict';

const plain = (arr, resultArr = []) => {
    if (!Array.isArray(arr)) return arr;
    arr.forEach((el) => {
        if (Array.isArray(el)) {
            plain(el, resultArr);
        } else {
            resultArr.push(el);
        }
    });
    return resultArr
};

