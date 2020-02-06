'use strict';

const euclid_for_two = function(first, second) {
    let temp;
    while (second > 0) {
        temp = second;
        second = first % second;
        first = temp;
    }
    return first;
}

const euclid = function () {
    var result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
         result = euclid_for_two(result, arguments[i]);
    }
    return result;
}
