'use strict';

const UNDEFINED_VALUE = 'Undefined greatest common divisor';
const INVALID_DATA = 'Only integer arguments supported';

/**
 *  Вычисляет наибольший общий делитель двух заданных чисел путём деления с остатком
 *
 * @param {number} firstNum - первое число
 * @param {number} secondNum - второе число
 *
 * @returns {(number|string)}
 *
 * @example
 *    gcdOfPair(16, 64)
 */

const gcdOfPair = (firstNum, secondNum) => {
    if (firstNum === 0 && secondNum === 0) {
         return UNDEFINED_VALUE;
    }

    firstNum = Math.abs(firstNum);
    secondNum = Math.abs(secondNum);

    while (secondNum > 0) {
        let temp = firstNum % secondNum;
        firstNum = secondNum;
        secondNum = temp;
    }

    return firstNum;
};

/**
 *  Вычисляет наибольший общий делитель произвольного набора чисел
 *
 * @param {...number} numbers - набор чисел
 *
 * @returns {(number|string)}
 *
 * @example
 *    euclid(16, 32, 64, 128, 100)
 */

function euclid(...numbers) {
    let allZeroCheck = true;

    for (let number of arguments) {
        if (!Number.isInteger(number)) {
            return INVALID_DATA;
        }

        if (number !== 0 && allZeroCheck) {
            allZeroCheck = false;
        }
    }

    if (allZeroCheck) {
        return UNDEFINED_VALUE;
    }

    while (numbers.length !== 1) {
        let gcdValue = gcdOfPair(numbers.pop(), numbers.pop());

        if (gcdValue === 1) {
            return 1;
        }

        if (gcdValue === UNDEFINED_VALUE) {
            continue;
        }

        numbers.push(gcdValue);
    }

    return numbers.pop();
}