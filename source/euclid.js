'use strict'

function euclid(...nums) {
    if (nums.length == 0) {
        return NaN;
    }

    while (nums.length > 2) {
        // Итеративно заменяем последние 2 элемента
        // массива их НОД-ом
        nums[-2] = nod(nums[-1], nums[-2]);
        nums.pop();
    }

    if (nums[0].toFixed(10) == 0) {
        // Здесь мы окажемся, если только на вход был подан 
        // массив, заполненный нулями, которые делятся
        // на сколь угодно большое число
        return Infinity;
    }

    return nums[0];

    function nod(lo, hi) {
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
}


    
