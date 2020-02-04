'use strict';

/**
 * Join subarrays into one array
 * @param  {Array} arr Array with subarrays
 * @param  {Array} resultArr Array with results of join
 * @return {Array} Array with results of join
 */
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

