'use strict';

/**
 * Вычисляет НОД целочисленного массива
 * @param nums {number}
 * @returns {undefined|number}
 * @author Артур Потапчук
 */
const euclid = (...nums) => {
    if (nums.length === 0
     || nums.length === 1 && typeof nums[0] !== 'number') {
        return;
    }

    while (nums.length > 1) {
        nums.push(nod(nums.pop(), nums.pop()));
    }

    return (nums[0] === 0) ? Infinity : nums[0];


    function nod(lo, hi) {
        if (typeof lo !== 'number'
         || typeof hi !== 'number') {
            return;
        }

        // нули делятся на сколь угодно большое число,
        // они нам не интересны
        if (!(lo * hi)) {
            return lo ? lo : hi;
        }

        while (hi) {
            if (lo > hi) {
                [lo, hi] = [hi, lo];
            }

            hi %= lo;
        }

        return lo;
    }
};


    
