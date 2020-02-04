'use strict';

const euclid_for_two = function (first, second) {
    while (first !== second) {
        if (first > second) {
            first = first - second;
        } else {
            second = second - first;
        }
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
