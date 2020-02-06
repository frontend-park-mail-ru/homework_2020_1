'use strict';


class LogicalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LogicalError';
    }
}

/**
 * Вычисляет НОД целочисленного массива
 * @param nums {number}
 * @returns {undefined|number}
 * @author Артур Потапчук
 */
const euclid = (...nums) => {
    const TYPE_ERROR_MESS = 'number[] expected';
    const LOGICAL_ERROR_MESS = 'empty array given';

    if (nums.length === 0) {
        throw new LogicalError(LOGICAL_ERROR_MESS);
    }

    if (nums.length === 1 && typeof nums[0] !== 'number') {
        throw new TypeError(TYPE_ERROR_MESS);
    }

    while (nums.length > 1) {
        nums.push(nod(nums.pop(), nums.pop()));
    }

    return (nums[0] === 0) ? Infinity : nums[0];


    function nod(lo, hi) {
        if (typeof lo !== 'number'
         || typeof hi !== 'number') {
            throw new TypeError(TYPE_ERROR_MESS);
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


    
