'use strict';

/**
 * @description Функция нахождения максимального и минимального значения в строке
 * @param {string} str Исходная строка
 * @returns {Array}  Массив, первый элемент -- минимальное значение, второй -- максимальное
 */

const minmax = (str) => {
    let result = [undefined, undefined];
    if (typeof str !== "string") {
        return result;
    }

    const elements = str.split(/[ ,]+/)
        .map(el => parseFloat(el))
        .filter(el => (!isNaN(el)));

    elements.forEach(el => {
        if (el < result[0] || result[0] === undefined) {
            result[0] = el;
        }
        if (el > result[1] || result[1] === undefined) {
            result[1] = el;
        }
    });

    return result;
};