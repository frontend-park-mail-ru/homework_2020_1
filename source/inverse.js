'use strict';

const inverse = function (array, index = 0) {
    if (Math.abs(index) >= array.length || array.length === 0) {
        return array;
    }

    let start, len;
    if (index <= 0) {
        start = 0;
        len = index;
    } else {
        start = index;
        len = 0;
    }
    let reversedPart = array.slice(start, array.length + len).reverse();
    array.splice(start, reversedPart.length, ...reversedPart);
    return array;
};