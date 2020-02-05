'use strict';

/**
 * @description нахождение подстроки одинаковых символов
 * @param {string} input исходная строка
 * @param {int} pos текущая рассматриваемая позиция в строке
 * @returns {int} возвращает количество символов в подстроке
 */
const getRepeatedAmount = (input, pos) => {
    let shift = 1;
    while (input[shift + pos] === input[pos] && shift < 9) {
        shift++;
    }
    return shift;
};

/**
 * @description реализация rle-сжатия
 * @param {string} input исходная строка
 * @returns {string, undefined} возвращает результирующую сжатую строку(output),
 * undefined - в случае, если на вход пришла не строка
 */
const rle = (input) => {
    if (typeof input !== 'string') {
        return void 0;
    }

    let output = '';
    for (let pos = 0, shift = 1; pos < input.length;pos += shift) {
        shift = getRepeatedAmount(input, pos);
        output += (shift === 1) ? input[pos] : input[pos] + shift;
    }
    return output;
};
