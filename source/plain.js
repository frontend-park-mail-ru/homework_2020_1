'use strict';

function plain(numbers, result_arr = []) {
    for (const num of numbers) {
        if (typeof num == "object" && num != null) {
            plain(num, result_arr);
        } else {
            result_arr.push(num);
        }
    }
    return result_arr
}
