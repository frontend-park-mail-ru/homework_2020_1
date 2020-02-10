'use strict';

/**
 * Возвращает перевернутый массив с определённым числом нетронутых элементов
 *
 * @author EgorBedov - https://github.com/EgorBedov
 * @param {Array} array - исходный массив
 * @param {number} index - число элементов, не нуждающихся в перестановке
 * @returns {string} - сообщение об ошибке
 * @returns {Array} - перевернутый массив
 */

const inverse = function (array, index = 0) {
    if (!Array.isArray(array) || typeof index != 'number' ) {
        return 'invalid arguments'
    }

    if (Math.abs(index) >= array.length || array.length === 0) {
        return array;
    }

    let start, length;
    if (index <= 0) {
        start = 0;
        length = index;
    } else {
        start = index;
        length = 0;
    }
    let reversedPart = array.slice(start, array.length + length).reverse();
    array.splice(start, reversedPart.length, ...reversedPart);
    return array;
};