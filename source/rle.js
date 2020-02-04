'use strict';
/**
 * @description нахождение подстроки одинаковых символов
 * @param {string} input исходная строка
 * @param {int} pos текущая рассматриваемая позиция в строке
 * @returns {int} возвращает количество символов в подстроке
 */
const getRepeatedAmount = (input, pos) => {
    let shift = 1;
    for (let symbol = input[pos]; input[shift + pos] === symbol && shift < 9; shift++) {}
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
        return undefined;
    }

    let new_string = "";
    for (let pos = 0; pos < input.length;) {
        let shift = getRepeatedAmount(input, pos);
        new_string += (shift === 1) ? input[pos] : input[pos] + shift;
        pos += shift;
    }
    return new_string;
};



